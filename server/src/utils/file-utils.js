/**
 * File management utilities for plugin uploads and processing
 */
import * as fs from 'fs/promises';
import fsSync from 'fs';
import { createReadStream, unlinkSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import AdmZip from 'adm-zip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure paths from environment variables
const UPLOAD_DIR = process.env.UPLOAD_DIR || 'server/uploads';
const TEMP_DIR = process.env.TEMP_DIR || 'server/temp';
const COMPONENTS_DIR = process.env.COMPONENTS_DIR || 'packages';

// File management routes
const setupFileRoutes = (router) => {
    // List files in the 'plugins' directory
    router.get('/files', (req, res) => {
        const pluginsDir = path.resolve(COMPONENTS_DIR);
        fsSync.readdir(pluginsDir, (err, files) => {
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

        fsSync.writeFile(filePath, content, err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write file' });
            }
            res.status(201).json({ message: 'File created' });
        });
    });

    // Delete a file
    router.delete('/files/:fileName', (req, res) => {
        const filePath = path.join('plugins', req.params.fileName);

        fsSync.unlink(filePath, err => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete file' });
            }
            res.json({ message: 'File deleted' });
        });
    });

    return router;
};

// Process and build plugin
const processPlugin = async (pluginDir, metadata) => {
    try {
        const { packageJson, componentName } = metadata;
        const version = packageJson.version || '1.0.0';
        
        // Create package structure using env vars
        const packagesDir = path.resolve(__dirname, `../../../${COMPONENTS_DIR}`);
        const targetDir = path.join(packagesDir, componentName);
        const versionDir = path.join(targetDir, `v${version}`);
        
        // Ensure target directory exists
        if (!fsSync.existsSync(versionDir)) {
            fsSync.mkdirSync(versionDir, { recursive: true });
        }
        
        // Copy plugin files to packages directory
        await copyDirectory(pluginDir, versionDir);
        
        // Install dependencies if needed
        // if (fsSync.existsSync(path.join(versionDir, 'package.json'))) {
        //     try {
        //         execSync('npm install', { cwd: versionDir, stdio: 'pipe' });
        //     } catch (error) {
        //         console.warn('Failed to install dependencies:', error.message);
        //     }
        // }
        
        // Build the plugin
        // const buildResult = await buildPlugin(versionDir, componentName, version);
        
        return {
            success: true,
            componentName,
            version,
            targetDir: versionDir,
            // buildResult
        };
    } catch (error) {
        console.error('Error processing plugin:', error);
        throw error;
    }
};

// Process uploaded zip file
export const processPluginUpload = async (zipBuffer, originalName) => {
    try {
        const tempDir = path.resolve(__dirname, `../../${TEMP_DIR}`);
        const uploadsDir = path.resolve(__dirname, `../../${UPLOAD_DIR}`);
        
        // Ensure directories exist
        if (!fsSync.existsSync(tempDir)) {
            fsSync.mkdirSync(tempDir, { recursive: true });
        }
        if (!fsSync.existsSync(uploadsDir)) {
            fsSync.mkdirSync(uploadsDir, { recursive: true });
        }
        const extractDir = path.join(tempDir, `extract_${Date.now()}`);
        try {
            const zip = new AdmZip(zipBuffer);
            zip.extractAllTo(extractDir, true);
        } catch (zipError) {
            console.error('Failed to extract zip:', zipError);
            throw new Error('Failed to extract plugin zip file');
        }
        const extractedContents = fsSync.readdirSync(extractDir);
        let pluginDir;
        if (extractedContents.length === 1 && fsSync.statSync(path.join(extractDir, extractedContents[0])).isDirectory()) {
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
        fsSync.rmSync(extractDir, { recursive: true, force: true });
        
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
        if (!fsSync.existsSync(packageJsonPath)) {
            return { valid: false, error: 'package.json not found' };
        }
        
        const packageJson = JSON.parse(fsSync.readFileSync(packageJsonPath, 'utf8'));
        
        // Essential fields validation
        if (!packageJson.name) {
            return { valid: false, error: 'package.json must contain a "name" property' };
        }
        if (!packageJson.version) {
            return { valid: false, error: 'package.json must contain a "version" property' };
        }

        // Check for main component file (supporting multiple types)
        const componentName = packageJson.name;
        const possibleFiles = [
            packageJson.main,
            `${componentName}.js`,
            `${componentName}.ts`,
            'index.js',
            'index.ts'
        ].filter(Boolean);

        let mainFile = null;
        for (const file of possibleFiles) {
            if (fsSync.existsSync(path.join(pluginDir, file))) {
                mainFile = file;
                break;
            }
        }

        if (!mainFile) {
            return { 
                valid: false, 
                error: `Main entry file not found. Checked: ${possibleFiles.join(', ')}` 
            };
        }

        return {
            valid: true,
            metadata: {
                packageJson,
                mainFile,
                componentName,
                hasReadme: fsSync.existsSync(path.join(pluginDir, 'README.md'))
            }
        };
    } catch (error) {
        return { valid: false, error: `Validation error: ${error.message}` };
    }
};

// Build plugin using Vite
const buildPlugin = async (pluginDir, componentName, version) => {
    try {
        const buildDir = path.resolve(__dirname, '../../plugins-build');
        if (!fsSync.existsSync(buildDir)) {
            fsSync.mkdirSync(buildDir, { recursive: true });
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
        
        fsSync.writeFileSync(viteConfigPath, viteConfig);
        
        // Run build
        execSync(`npx vite build --config ${viteConfigPath}`, {
            cwd: pluginDir,
            stdio: 'pipe'
        });
        
        // Cleanup
        fsSync.unlinkSync(viteConfigPath);
        
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
        if (fsSync.existsSync(path.join(pluginDir, file))) {
            return file;
        }
    }
    
    throw new Error('Main component file not found');
};

// Copy directory recursively
const copyDirectory = async (src, dest) => {
    if (!fsSync.existsSync(dest)) {
        fsSync.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fsSync.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath);
        } else {
            fsSync.copyFileSync(srcPath, destPath);
        }
    }
};

// Function to find the main JavaScript file in a directory
export const findMainJsFile = async (dirPath) => {
    try {
        // Read all files in the directory
        const files = fsSync.readdirSync(dirPath);
        
        // Priority 0: Check package.json main field
        const pkgJsonPath = path.join(dirPath, 'package.json');
        if (fsSync.existsSync(pkgJsonPath)) {
            try {
                const pkgJson = JSON.parse(fsSync.readFileSync(pkgJsonPath, 'utf8'));
                if (pkgJson.main && files.includes(pkgJson.main)) {
                    return [path.join(dirPath, pkgJson.main)];
                } else if (pkgJson.main && files.includes(path.basename(pkgJson.main))) {
                    // Handle cases where main might be a path like "./dist/index.js"
                    return [path.join(dirPath, path.basename(pkgJson.main))];
                }
            } catch (e) {
                console.warn('Error reading package.json for main file:', e);
            }
        }

        // Priority 1: Check for matching name (of the parent directory of v1.0.0, i.e. the component family)
        const parentDirName = path.basename(path.dirname(dirPath));
        const matchingFile = files.find(f => 
            f.toLowerCase() === `${parentDirName.toLowerCase()}.js` ||
            f.toLowerCase() === `${parentDirName.toLowerCase()}.mjs`
        );
        if (matchingFile) {
            return [path.join(dirPath, matchingFile)];
        }
        
        // Priority 2: Check for index.js
        const indexFile = files.find(f => 
            f.toLowerCase() === 'index.js' ||
            f.toLowerCase() === 'index.mjs'
        );
        if (indexFile) {
            return [path.join(dirPath, indexFile)];
        }
        
        // Priority 3: Check for main.js
        const mainFile = files.find(f => 
            f.toLowerCase() === 'main.js' ||
            f.toLowerCase() === 'main.mjs'
        );
        if (mainFile) {
            return [path.join(dirPath, mainFile)];
        }
        
        // Priority 4: Return all .js files
        const jsFiles = files.filter(f => f.endsWith('.js') || f.endsWith('.mjs'));
        if (jsFiles.length > 0) {
            return jsFiles.map(f => path.join(dirPath, f));
        }
        
        return null;
    } catch (error) {
        console.error('Error finding main JS file:', error);
        return null;
    }
}

export { setupFileRoutes };
