/**
 * Component scanning and metadata extraction utilities
 */
import fs from 'fs';
import path from 'path';
import { extractComponentFamily } from './version-utils.js';

// Helper function to scan directory structure for components
export const scanComponentStructure = (packagesDir) => {
    const components = new Map();
    
    if (!fs.existsSync(packagesDir)) {
        console.warn(`Packages directory does not exist: ${packagesDir}`);
        return components;
    }

    const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const packageDir of packageDirs) {
        try {
            const packagePath = path.join(packagesDir, packageDir);
            
            // Check if this is a versioned directory structure (Option A)
            const versionDirs = fs.readdirSync(packagePath, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory() && dirent.name.match(/^v?\d+\.\d+\.\d+/))
                .map(dirent => dirent.name);

            if (versionDirs.length > 0) {
                // Option A: Version subdirectories
                const family = packageDir;
                
                for (const versionDir of versionDirs) {
                    const versionPath = path.join(packagePath, versionDir);
                    const packageJsonPath = path.join(versionPath, 'package.json');
                    
                    if (fs.existsSync(packageJsonPath)) {
                        try {
                            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                            const version = packageJson.version || versionDir.replace(/^v/, '');
                            
                            if (!components.has(family)) {
                                components.set(family, new Map());
                            }
                            
                            components.get(family).set(version, {
                                path: versionPath,
                                packageJson,
                                structure: 'versioned',
                                directoryName: versionDir
                            });
                        } catch (error) {
                            console.error(`Error reading package.json for ${family}/${versionDir}:`, error);
                        }
                    }
                }
            } else {
                // Option B: Component name with version suffix OR single version
                const packageJsonPath = path.join(packagePath, 'package.json');
                
                if (fs.existsSync(packageJsonPath)) {
                    try {
                        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                        const version = packageJson.version || '1.0.0';
                        const family = extractComponentFamily(packageDir);
                        
                        if (!components.has(family)) {
                            components.set(family, new Map());
                        }
                        
                        components.get(family).set(version, {
                            path: packagePath,
                            packageJson,
                            structure: 'flat',
                            directoryName: packageDir
                        });
                    } catch (error) {
                        console.error(`Error reading package.json for ${packageDir}:`, error);
                    }
                } else {
                    // Option C: Compiled components without package.json (like flow nodes)
                    // Check if directory contains .js files (compiled components)
                    const jsFiles = fs.readdirSync(packagePath).filter(f => f.endsWith('.js') && !f.includes('.map'));
                    
                    if (jsFiles.length > 0) {
                        // Extract version from directory name if present, otherwise use default
                        const versionMatch = packageDir.match(/v?(\d+\.\d+\.\d+)/);
                        const version = versionMatch ? versionMatch[1] : '1.0.0';
                        const family = extractComponentFamily(packageDir);
                        
                        // Create minimal package.json from directory name and keywords
                        const keywords = packageDir.includes('flow-node') 
                            ? ['flow-node', `flow-node-type:${packageDir.replace('zero-flow-node-', '')}`]
                            : [];
                        
                        const inferredPackageJson = {
                            name: packageDir,
                            version: version,
                            description: `Compiled component: ${packageDir}`,
                            keywords: keywords
                        };
                        
                        if (!components.has(family)) {
                            components.set(family, new Map());
                        }
                        
                        components.get(family).set(version, {
                            path: packagePath,
                            packageJson: inferredPackageJson,
                            structure: 'compiled',
                            directoryName: packageDir
                        });
                    }
                }
            }
        } catch (error) {
            console.error(`Error scanning directory ${packageDir}:`, error);
        }
    }
    
    return components;
};

// Helper function to extract component metadata from TypeScript files
export const extractComponentMetadata = (componentPath, packageName) => {
    const componentFile = path.join(componentPath, `${packageName}.ts`);
    let componentMetadata = {};
    
    if (fs.existsSync(componentFile)) {
        try {
            const componentContent = fs.readFileSync(componentFile, 'utf8');
            // Extract @RendererComponent metadata
            const rendererMatch = componentContent.match(/@RendererComponent\s*\(\s*\{([^}]+)\}/s);
            if (rendererMatch) {
                // Simple extraction of common properties
                const titleMatch = componentContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
                const groupMatch = componentContent.match(/group:\s*['"`]([^'"`]+)['"`]/);
                const versionMatch = componentContent.match(/version:\s*['"`]([^'"`]+)['"`]/);
                const elementSelectorMatch = componentContent.match(/elementSelector:\s*['"`]([^'"`]+)['"`]/);
                
                if (titleMatch) componentMetadata.title = titleMatch[1];
                if (groupMatch) componentMetadata.group = groupMatch[1];
                if (versionMatch) componentMetadata.componentVersion = versionMatch[1];
                if (elementSelectorMatch) componentMetadata.elementSelector = elementSelectorMatch[1];
            }
        } catch (error) {
            console.warn(`Could not extract component metadata for ${packageName}:`, error);
        }
    }
    
    return componentMetadata;
};
