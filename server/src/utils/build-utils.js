/**
 * Build utilities for components
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Build a single component using Vite
export const buildComponent = async (componentPath, outputName, outputDir) => {
    try {
        console.log(`Building component at: ${componentPath}`);
        
        // Create a temporary vite config for this component
        const tempConfigPath = path.join(componentPath, 'vite.config.temp.js');
        const viteConfig = `
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './${path.basename(componentPath)}.ts',
      name: '${outputName}',
      fileName: (format) => \`${outputName}.\${format}.js\`,
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
        
        fs.writeFileSync(tempConfigPath, viteConfig);
        
        // Run vite build
        execSync(`npx vite build --config ${tempConfigPath}`, {
            cwd: componentPath,
            stdio: 'inherit'
        });
        
        // Cleanup temp config
        fs.unlinkSync(tempConfigPath);
        
        return { success: true, outputDir };
    } catch (error) {
        console.error(`Error building component:`, error);
        return { success: false, error: error.message };
    }
};

// Build all components in packages directory
export const buildAllComponents = async () => {
    const results = [];
    const packagesDir = path.resolve(process.cwd(), '../packages');
    
    if (!fs.existsSync(packagesDir)) {
        throw new Error('Packages directory not found');
    }
    
    const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    
    for (const packageDir of packageDirs) {
        try {
            const packagePath = path.join(packagesDir, packageDir);
            
            // Check for versioned structure
            const versionDirs = fs.readdirSync(packagePath, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory() && dirent.name.match(/^v?\d+\.\d+\.\d+/))
                .map(dirent => dirent.name);
            
            if (versionDirs.length > 0) {
                // Versioned structure
                for (const versionDir of versionDirs) {
                    const versionPath = path.join(packagePath, versionDir);
                    const result = await buildComponent(
                        versionPath,
                        `${packageDir}-${versionDir}`,
                        path.resolve(process.cwd(), './plugins-build')
                    );
                    
                    results.push({
                        family: packageDir,
                        version: versionDir.replace(/^v/, ''),
                        ...result
                    });
                }
            } else {
                // Flat structure
                const result = await buildComponent(
                    packagePath,
                    packageDir,
                    path.resolve(process.cwd(), './plugins-build')
                );
                
                results.push({
                    family: packageDir,
                    version: '1.0.0',
                    ...result
                });
            }
        } catch (error) {
            console.error(`Error processing package ${packageDir}:`, error);
            results.push({
                family: packageDir,
                success: false,
                error: error.message
            });
        }
    }
    
    return results;
};

// Create component package structure
export const createComponentPackage = async (family, version, outputDir, componentData) => {
    try {
        const packageDir = path.join(outputDir, `${family}-${version}`);
        
        // Create package directory
        if (!fs.existsSync(packageDir)) {
            fs.mkdirSync(packageDir, { recursive: true });
        }
        
        // Copy package.json
        const packageJsonPath = path.join(packageDir, 'package.json');
        fs.writeFileSync(packageJsonPath, JSON.stringify(componentData.packageJson, null, 2));
        
        // Copy README if exists
        const readmePath = path.join(componentData.path, 'README.md');
        if (fs.existsSync(readmePath)) {
            fs.copyFileSync(readmePath, path.join(packageDir, 'README.md'));
        }
        
        return packageDir;
    } catch (error) {
        console.error(`Error creating component package:`, error);
        throw error;
    }
};
