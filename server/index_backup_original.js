import express from 'express';
import fs from 'fs';
import path from 'path';
import { env } from 'node:process';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = env.PORT || 9000;
const basePath = env.BASE_PATH || '';

app.use(express.json());

// Use CORS middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

// Create the application and setup routes
const createApp = () => {
    setupRoutes(app, basePath);

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}${basePath}`);
    });

    return app;
};

// Setup application routes and middleware
const setupRoutes = (app, basePath) => {
    const router = express.Router();

    // Ping endpoint
    router.get('/ping', (req, res) => {
        res.json({ message: 'Hello World!' });
    });

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

    // Serve static files from 'plugins' directory
    router.use('/plugins', express.static('plugins'));

    // Serve marketplace UI
    router.use('/marketplace', express.static(path.resolve(__dirname, 'marketplace')));
    
    // Redirect root to marketplace
    router.get('/', (req, res) => {
        res.redirect('/marketplace');
    });

    // ===== MULTI-VERSION HELPER FUNCTIONS =====

    // Helper function to extract component family name
    const extractComponentFamily = (packageName) => {
        // Remove version suffixes like -v1.0.0, -1.0.0, etc.
        return packageName.replace(/-v?\d+\.\d+\.\d+.*$/, '');
    };

    // Helper function to parse semantic version
    const parseVersion = (versionString) => {
        const match = versionString.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/);
        if (!match) return null;
        
        return {
            major: parseInt(match[1]),
            minor: parseInt(match[2]),
            patch: parseInt(match[3]),
            prerelease: match[4] || null,
            original: versionString
        };
    };

    // Helper function to check if version is stable
    const isStableVersion = (version) => {
        return !version.includes('alpha') && !version.includes('beta') && !version.includes('rc');
    };

    // Helper function to scan directory structure for components
    const scanComponentStructure = (packagesDir) => {
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
                    }
                }
            } catch (error) {
                console.error(`Error scanning directory ${packageDir}:`, error);
            }
        }
        
        return components;
    };

    // Helper function to extract component metadata from TypeScript files
    const extractComponentMetadata = (componentPath, packageName) => {
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

    // ===== NEW MULTI-VERSION API ENDPOINTS =====

    // Get all component families with their versions
    router.get('/marketplace/components', async (req, res) => {
        try {
            const packagesDir = path.resolve(__dirname, '../packages');
            const components = scanComponentStructure(packagesDir);
            const componentFamilies = {};

            // Process each component family
            for (const [family, versions] of components) {
                componentFamilies[family] = {
                    latest: null,
                    latestStable: null,
                    versions: [],
                    deprecated: [],
                    structure: 'mixed'
                };

                const versionArray = Array.from(versions.keys());
                componentFamilies[family].versions = versionArray;
                
                // Determine structure type
                const structures = Array.from(versions.values()).map(v => v.structure);
                componentFamilies[family].structure = structures.every(s => s === 'versioned') ? 'versioned' : 
                                                    structures.every(s => s === 'flat') ? 'flat' : 'mixed';

                // Find latest and latestStable versions
                let latestVersion = null;
                let latestStableVersion = null;
                
                for (const version of versionArray) {
                    const parsedVersion = parseVersion(version);
                    if (!parsedVersion) continue;
                    
                    // Update latest
                    if (!latestVersion) {
                        latestVersion = version;
                    } else {
                        const parsedLatest = parseVersion(latestVersion);
                        if (parsedLatest && (
                            parsedVersion.major > parsedLatest.major ||
                            (parsedVersion.major === parsedLatest.major && parsedVersion.minor > parsedLatest.minor) ||
                            (parsedVersion.major === parsedLatest.major && parsedVersion.minor === parsedLatest.minor && parsedVersion.patch > parsedLatest.patch)
                        )) {
                            latestVersion = version;
                        }
                    }
                    
                    // Update latestStable if this is stable
                    if (isStableVersion(version)) {
                        if (!latestStableVersion) {
                            latestStableVersion = version;
                        } else {
                            const parsedStable = parseVersion(latestStableVersion);
                            if (parsedStable && (
                                parsedVersion.major > parsedStable.major ||
                                (parsedVersion.major === parsedStable.major && parsedVersion.minor > parsedStable.minor) ||
                                (parsedVersion.major === parsedStable.major && parsedVersion.minor === parsedStable.minor && parsedVersion.patch > parsedStable.patch)
                            )) {
                                latestStableVersion = version;
                            }
                        }
                    }
                }
                
                componentFamilies[family].latest = latestVersion;
                componentFamilies[family].latestStable = latestStableVersion;

                // Sort versions (newest first)
                componentFamilies[family].versions.sort((a, b) => {
                    const vA = parseVersion(a);
                    const vB = parseVersion(b);
                    if (!vA || !vB) return 0;
                    
                    if (vA.major !== vB.major) return vB.major - vA.major;
                    if (vA.minor !== vB.minor) return vB.minor - vA.minor;
                    if (vA.patch !== vB.patch) return vB.patch - vA.patch;
                    
                    // Handle prerelease versions
                    if (vA.prerelease && !vB.prerelease) return 1;
                    if (!vA.prerelease && vB.prerelease) return -1;
                    if (vA.prerelease && vB.prerelease) return vB.prerelease.localeCompare(vA.prerelease);
                    
                    return 0;
                });
            }

            res.json(componentFamilies);
        } catch (error) {
            console.error('Error scanning components:', error);
            res.status(500).json({ error: 'Failed to scan components' });
        }
    });

    // Get specific version details
    router.get('/marketplace/components/:family/:version', async (req, res) => {
        try {
            const { family, version } = req.params;
            const packagesDir = path.resolve(__dirname, '../packages');
            const components = scanComponentStructure(packagesDir);
            
            if (!components.has(family) || !components.get(family).has(version)) {
                return res.status(404).json({ error: 'Component version not found' });
            }
            
            const componentData = components.get(family).get(version);
            const packageJson = componentData.packageJson;
            
            // Read README content if it exists
            const readmePath = path.join(componentData.path, 'README.md');
            let readmeContent = '';
            if (fs.existsSync(readmePath)) {
                readmeContent = fs.readFileSync(readmePath, 'utf8');
            }
            
            // Extract component metadata
            const componentMetadata = extractComponentMetadata(componentData.path, componentData.directoryName);
            
            const response = {
                id: `${family}-${version}`,
                family: family,
                version: version,
                name: packageJson.name || family,
                title: componentMetadata.title || packageJson.name || family,
                description: packageJson.description || 'No description available',
                group: componentMetadata.group || 'Components',
                keywords: packageJson.keywords || [],
                author: packageJson.author || 'Unknown',
                license: packageJson.license || 'MIT',
                elementSelector: componentMetadata.elementSelector || `zero-${family}`,
                isStable: isStableVersion(version),
                structure: componentData.structure,
                readmeContent: readmeContent,
                hasReadme: !!readmeContent,
                verified: true,
                installed: false,
                // Version-specific metadata
                componentVersion: componentMetadata.componentVersion || version,
                path: componentData.path,
                directoryName: componentData.directoryName
            };
            
            res.json(response);
        } catch (error) {
            console.error('Error getting component version:', error);
            res.status(500).json({ error: 'Failed to get component version' });
        }
    });

    // Get version comparison
    router.get('/marketplace/components/:family/compare/:version1/:version2', async (req, res) => {
        try {
            const { family, version1, version2 } = req.params;
            const packagesDir = path.resolve(__dirname, '../packages');
            const components = scanComponentStructure(packagesDir);
            
            if (!components.has(family)) {
                return res.status(404).json({ error: 'Component family not found' });
            }
            
            const familyVersions = components.get(family);
            
            if (!familyVersions.has(version1) || !familyVersions.has(version2)) {
                return res.status(404).json({ error: 'One or both versions not found' });
            }
            
            const v1Data = familyVersions.get(version1);
            const v2Data = familyVersions.get(version2);
            
            const comparison = {
                family: family,
                version1: {
                    version: version1,
                    packageJson: v1Data.packageJson,
                    metadata: extractComponentMetadata(v1Data.path, v1Data.directoryName),
                    isStable: isStableVersion(version1)
                },
                version2: {
                    version: version2,
                    packageJson: v2Data.packageJson,
                    metadata: extractComponentMetadata(v2Data.path, v2Data.directoryName),
                    isStable: isStableVersion(version2)
                },
                differences: {
                    // Add comparison logic here
                    versionDiff: parseVersion(version2).major - parseVersion(version1).major,
                    breakingChanges: [], // TODO: Implement
                    newFeatures: [], // TODO: Implement
                    bugFixes: [] // TODO: Implement
                }
            };
            
            res.json(comparison);
        } catch (error) {
            console.error('Error comparing versions:', error);
            res.status(500).json({ error: 'Failed to compare versions' });
        }
    });

    // ===== LEGACY ENDPOINTS (for backward compatibility) =====

    // Get all packages/plugins from the packages directory (legacy endpoint)
    router.get('/marketplace/plugins', async (req, res) => {
        try {
            const packagesDir = path.resolve(__dirname, '../packages');
            const components = scanComponentStructure(packagesDir);
            const plugins = [];

            // Flatten all versions into a single list for legacy compatibility
            for (const [family, versions] of components) {
                for (const [version, componentData] of versions) {
                    const packageJson = componentData.packageJson;
                    const componentMetadata = extractComponentMetadata(componentData.path, componentData.directoryName);
                    
                    // Read README content
                    const readmePath = path.join(componentData.path, 'README.md');
                    const hasReadme = fs.existsSync(readmePath);
                    
                    plugins.push({
                        id: componentData.directoryName,
                        name: packageJson.name || componentData.directoryName,
                        version: version,
                        description: packageJson.description || 'No description available',
                        title: componentMetadata.title || packageJson.name || family,
                        group: componentMetadata.group || 'Components',
                        keywords: packageJson.keywords || [],
                        author: packageJson.author || 'Unknown',
                        license: packageJson.license || 'MIT',
                        hasReadme,
                        verified: true,
                        installed: false,
                        // Multi-version metadata
                        family: family,
                        isStable: isStableVersion(version),
                        componentVersion: componentMetadata.componentVersion || version,
                        structure: componentData.structure
                    });
                }
            }

            res.json({ plugins, total: plugins.length });
        } catch (error) {
            console.error('Error reading packages directory:', error);
            res.status(500).json({ error: 'Failed to read packages directory' });
        }
    });

    // Get specific plugin details including README content (legacy endpoint)
    router.get('/marketplace/plugins/:pluginId', async (req, res) => {
        try {
            const { pluginId } = req.params;
            const packagesDir = path.resolve(__dirname, '../packages');
            
            // First try to find the plugin in the current flat structure
            const pluginDir = path.join(packagesDir, pluginId);
            
            if (fs.existsSync(pluginDir)) {
                const packageJsonPath = path.join(pluginDir, 'package.json');
                
                if (fs.existsSync(packageJsonPath)) {
                    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                    
                    // Read README content if it exists
                    const readmePath = path.join(pluginDir, 'README.md');
                    let readmeContent = '';
                    if (fs.existsSync(readmePath)) {
                        readmeContent = fs.readFileSync(readmePath, 'utf8');
                    }

                    // Get component metadata
                    const componentMetadata = extractComponentMetadata(pluginDir, pluginId);
                    const version = packageJson.version || '1.0.0';
                    const family = extractComponentFamily(pluginId);

                    const response = {
                        id: pluginId,
                        name: packageJson.name || pluginId,
                        version: version,
                        description: packageJson.description || 'No description available',
                        title: componentMetadata.title || packageJson.name || pluginId,
                        group: componentMetadata.group || 'Components',
                        keywords: packageJson.keywords || [],
                        author: packageJson.author || 'Unknown',
                        license: packageJson.license || 'MIT',
                        readmeContent: readmeContent,
                        hasReadme: !!readmeContent,
                        verified: true,
                        installed: false,
                        // Multi-version metadata
                        family: family,
                        isStable: isStableVersion(version),
                        componentVersion: componentMetadata.componentVersion || version,
                        elementSelector: componentMetadata.elementSelector || `zero-${family}`
                    };

                    return res.json(response);
                }
            }
            
            return res.status(404).json({ error: 'Plugin not found' });
        } catch (error) {
            console.error('Error reading plugin details:', error);
            res.status(500).json({ error: 'Failed to read plugin details' });
        }
    });

    // Mount the router
    if (basePath) {
        app.use(basePath, router);
    } else {
        app.use(router);
    }
};

// Start the server
createApp();

export default app;