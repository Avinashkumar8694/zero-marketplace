/**
 * File management utilities for plugin uploads and processing
 */
import * as fs from 'fs/promises';
import { createReadStream, existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync, statSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import AdmZip from 'adm-zip';
// import * as fse from 'fs-extra';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File management routes
const setupFileRoutes = (router) => {
    // List files in the 'plugins' directory
    router.get('/files', (req, res) => {
        const pluginsDir = path.resolve('plugins');
        fs.readdir(pluginsDir, (err, files) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to list files' });
            }
            res.json({ files });
        });
    });

    // Add a new file
    router.post('/files', (req, res) => {
        const { fileName, content } = req.body;
        const filePath = path.join('plugins', fileName);

        if (!fileName || !content) {
            return res.status(400).json({ error: 'File name and content are required' });
        }

        fs.writeFile(filePath, content, err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write file' });
            }
            res.status(201).json({ message: 'File created' });
        });
    });

    // Delete a file
    router.delete('/files/:fileName', (req, res) => {
        const filePath = path.join('plugins', req.params.fileName);

        fs.unlink(filePath, err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete file' });
            }
            res.json({ message: 'File deleted' });
        });
    });

    return router;
};

// Process uploaded zip file
export const processPluginUpload = async (zipBuffer, originalName) => {
    try {
        const tempDir = path.resolve(__dirname, '../../temp');
        const uploadsDir = path.resolve(__dirname, '../../uploads');
        
        // Ensure directories exist
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }
        
        const extractDir = path.join(tempDir, `extract_${Date.now()}`);        // Extract zip file using AdmZip
        try {
            const zip = new AdmZip(zipBuffer);
            zip.extractAllTo(extractDir, true);
        } catch (zipError) {
            console.error('Failed to extract zip:', zipError);
            throw new Error('Failed to extract plugin zip file');
        }
        
        // Find the main plugin directory
        const extractedContents = fs.readdirSync(extractDir);
        let pluginDir;
        
        if (extractedContents.length === 1 && fs.statSync(path.join(extractDir, extractedContents[0])).isDirectory()) {
            pluginDir = path.join(extractDir, extractedContents[0]);
        } else {
            pluginDir = extractDir;
        }
        
        // Validate plugin structure
        const validation = validatePluginStructure(pluginDir);
        if (!validation.valid) {
            throw new Error(`Invalid plugin structure: ${validation.error}`);
        }
        
        // Process the plugin
        const pluginInfo = await processPlugin(pluginDir, validation.metadata);
        
        // Cleanup temp directory
        fs.rmSync(extractDir, { recursive: true, force: true });
        
        return pluginInfo;
    } catch (error) {
        console.error('Error processing plugin upload:', error);
        throw error;
    }
};

// Validate plugin structure
const validatePluginStructure = (pluginDir) => {
    try {
        // Check for package.json
        const packageJsonPath = path.join(pluginDir, 'package.json');
        if (!fs.existsSync(packageJsonPath)) {
            return { valid: false, error: 'package.json not found' };
        }
        
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Check for main component file
        const componentName = packageJson.name || path.basename(pluginDir);
        const possibleFiles = [
            `${componentName}.ts`,
            `${componentName}.js`,
            'index.ts',
            'index.js'
        ];
        
        let mainFile = null;
        for (const file of possibleFiles) {
            if (fs.existsSync(path.join(pluginDir, file))) {
                mainFile = file;
                break;
            }
        }
        
        if (!mainFile) {
            return { valid: false, error: 'Main component file not found' };
        }
        
        return {
            valid: true,
            metadata: {
                packageJson,
                mainFile,
                componentName,
                hasReadme: fs.existsSync(path.join(pluginDir, 'README.md'))
            }
        };
    } catch (error) {
        return { valid: false, error: error.message };
    }
};

// Process and build plugin
const processPlugin = async (pluginDir, metadata) => {
    try {
        const { packageJson, componentName } = metadata;
        const version = packageJson.version || '1.0.0';
        
        // Create package structure
        const packagesDir = path.resolve(__dirname, '../../../packages');
        const targetDir = path.join(packagesDir, componentName);
        const versionDir = path.join(targetDir, `v${version}`);
        
        // Ensure target directory exists
        if (!fs.existsSync(versionDir)) {
            fs.mkdirSync(versionDir, { recursive: true });
        }
        
        // Copy plugin files to packages directory
        await copyDirectory(pluginDir, versionDir);
        
        // Install dependencies if needed
        if (fs.existsSync(path.join(versionDir, 'package.json'))) {
            try {
                execSync('npm install', { cwd: versionDir, stdio: 'pipe' });
            } catch (error) {
                console.warn('Failed to install dependencies:', error.message);
            }
        }
        
        // Build the plugin
        const buildResult = await buildPlugin(versionDir, componentName, version);
        
        return {
            success: true,
            componentName,
            version,
            targetDir: versionDir,
            buildResult
        };
    } catch (error) {
        console.error('Error processing plugin:', error);
        throw error;
    }
};

// Build plugin using Vite
const buildPlugin = async (pluginDir, componentName, version) => {
    try {
        const buildDir = path.resolve(__dirname, '../../plugins-build');
        if (!fs.existsSync(buildDir)) {
            fs.mkdirSync(buildDir, { recursive: true });
        }
        
        const outputDir = path.join(buildDir, `${componentName}-v${version}`);
        
        // Create Vite config
        const viteConfigPath = path.join(pluginDir, 'vite.config.temp.js');
        const mainFile = findMainFile(pluginDir, componentName);
        
        const viteConfig = `
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './${mainFile}',
      name: '${componentName}',
      fileName: (format) => \`${componentName}.\${format}.js\`,
      formats: ['es', 'umd']
    },
    outDir: '${outputDir}',
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'Lit'
        }
      }
    }
  }
});
`;
        
        fs.writeFileSync(viteConfigPath, viteConfig);
        
        // Run build
        execSync(`npx vite build --config ${viteConfigPath}`, {
            cwd: pluginDir,
            stdio: 'pipe'
        });
        
        // Cleanup
        fs.unlinkSync(viteConfigPath);
        
        return {
            success: true,
            outputDir,
            mainFile
        };
    } catch (error) {
        console.error('Build error:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

// Find main component file
const findMainFile = (pluginDir, componentName) => {
    const possibleFiles = [
        `${componentName}.ts`,
        `${componentName}.js`,
        'index.ts',
        'index.js'
    ];
    
    for (const file of possibleFiles) {
        if (fs.existsSync(path.join(pluginDir, file))) {
            return file;
        }
    }
    
    throw new Error('Main component file not found');
};

// Copy directory recursively
const copyDirectory = async (src, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

export { setupFileRoutes };
