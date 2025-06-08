import express from 'express';
import fs from 'fs';
import path from 'path';
import { env } from 'node:process';
import cors from 'cors'; // Import cors
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = env.PORT || 9000;
const basePath = env.BASE_PATH || '';

app.use(express.json()); // Middleware to parse JSON bodies

// Use CORS middleware
app.use(cors({
    origin: '*', // Allow all origins (or configure specific origins)
    methods: ['GET', 'POST', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
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
    });    // Serve static files from 'plugins' directory
    router.use('/plugins', express.static('plugins'));

    // Serve marketplace UI
    router.use('/marketplace', express.static(path.resolve(__dirname, 'marketplace')));
    
    // Redirect root to marketplace
    router.get('/', (req, res) => {
        res.redirect('/marketplace');
    });

    // Marketplace API endpoints      // Helper function to extract component family name
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
        
        const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        for (const packageDir of packageDirs) {
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
                                structure: 'versioned'
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
                            structure: 'flat'
                        });
                    } catch (error) {
                        console.error(`Error reading package.json for ${packageDir}:`, error);
                    }
                }
            }
        }
        
        return components;
    };    // Get all component families with their versions
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
                    structure: 'mixed' // Will be updated based on versions found
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

                // Sort versions
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
            });

            res.json(componentFamilies);
        } catch (error) {
            console.error('Error reading packages directory:', error);
            res.status(500).json({ error: 'Failed to read packages directory' });
        }
    });

    // Get all packages/plugins from the packages directory (legacy endpoint)
    router.get('/marketplace/plugins', async (req, res) => {
        try {
            const packagesDir = path.resolve(__dirname, '../packages');
            const packageDirs = fs.readdirSync(packagesDir, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);

            const plugins = [];

            for (const packageDir of packageDirs) {
                const packageJsonPath = path.join(packagesDir, packageDir, 'package.json');
                const readmePath = path.join(packagesDir, packageDir, 'README.md');
                
                if (fs.existsSync(packageJsonPath)) {
                    try {
                        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
                        
                        // Check if README exists
                        const hasReadme = fs.existsSync(readmePath);
                        
                        // Get component file for additional metadata
                        const componentFile = path.join(packagesDir, packageDir, `${packageDir}.ts`);
                        let componentMetadata = {};
                        
                        if (fs.existsSync(componentFile)) {
                            const componentContent = fs.readFileSync(componentFile, 'utf8');
                            // Extract @RendererComponent metadata
                            const rendererMatch = componentContent.match(/@RendererComponent\s*\(\s*\{([^}]+)\}/s);
                            if (rendererMatch) {
                                try {
                                    // Simple extraction of title and group
                                    const titleMatch = componentContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
                                    const groupMatch = componentContent.match(/group:\s*['"`]([^'"`]+)['"`]/);
                                    const versionMatch = componentContent.match(/version:\s*['"`]([^'"`]+)['"`]/);
                                    
                                    if (titleMatch) componentMetadata.title = titleMatch[1];
                                    if (groupMatch) componentMetadata.group = groupMatch[1];
                                    if (versionMatch) componentMetadata.componentVersion = versionMatch[1];
                                } catch (e) {
                                    console.warn(`Could not parse component metadata for ${packageDir}`);
                                }
                            }
                        }

                        const version = packageJson.version || '1.0.0';
                        const family = extractComponentFamily(packageDir);

                        plugins.push({
                            id: packageDir,
                            name: packageJson.name || packageDir,
                            version: version,
                            description: packageJson.description || 'No description available',
                            title: componentMetadata.title || packageJson.name || packageDir,
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
                            componentVersion: componentMetadata.componentVersion || version
                        });
                    } catch (error) {
                        console.error(`Error reading package.json for ${packageDir}:`, error);
                    }
                }
            }

            res.json({ plugins, total: plugins.length });
        } catch (error) {
            console.error('Error reading packages directory:', error);
            res.status(500).json({ error: 'Failed to read packages directory' });
        }
    });

    // Get specific plugin details including README content
    router.get('/marketplace/plugins/:pluginId', async (req, res) => {
        try {
            const { pluginId } = req.params;
            const packagesDir = path.resolve(__dirname, '../packages');
            const pluginDir = path.join(packagesDir, pluginId);
            
            if (!fs.existsSync(pluginDir)) {
                return res.status(404).json({ error: 'Plugin not found' });
            }

            const packageJsonPath = path.join(pluginDir, 'package.json');
            const readmePath = path.join(pluginDir, 'README.md');
            
            if (!fs.existsSync(packageJsonPath)) {
                return res.status(404).json({ error: 'Package.json not found' });
            }

            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            
            // Read README content if it exists
            let readmeContent = '';
            if (fs.existsSync(readmePath)) {
                readmeContent = fs.readFileSync(readmePath, 'utf8');
            }

            // Get component metadata
            const componentFile = path.join(pluginDir, `${pluginId}.ts`);
            let componentMetadata = {};
            
            if (fs.existsSync(componentFile)) {
                const componentContent = fs.readFileSync(componentFile, 'utf8');
                // Extract @RendererComponent metadata
                const rendererMatch = componentContent.match(/@RendererComponent\s*\(\s*\{([^}]+)\}/s);
                if (rendererMatch) {
                    try {
                        const titleMatch = componentContent.match(/title:\s*['"`]([^'"`]+)['"`]/);
                        const groupMatch = componentContent.match(/group:\s*['"`]([^'"`]+)['"`]/);
                        const versionMatch = componentContent.match(/version:\s*['"`]([^'"`]+)['"`]/);
                        const elementSelectorMatch = componentContent.match(/elementSelector:\s*['"`]([^'"`]+)['"`]/);
                        
                        if (titleMatch) componentMetadata.title = titleMatch[1];
                        if (groupMatch) componentMetadata.group = groupMatch[1];
                        if (versionMatch) componentMetadata.componentVersion = versionMatch[1];
                        if (elementSelectorMatch) componentMetadata.elementSelector = elementSelectorMatch[1];
                    } catch (e) {
                        console.warn(`Could not parse component metadata for ${pluginId}`);
                    }
                }
            }

            const pluginDetails = {
                id: pluginId,
                name: packageJson.name || pluginId,
                version: packageJson.version || '1.0.0',
                description: packageJson.description || 'No description available',
                title: componentMetadata.title || packageJson.name || pluginId,
                group: componentMetadata.group || 'Components',
                elementSelector: componentMetadata.elementSelector || `zero-${pluginId}`,
                keywords: packageJson.keywords || [],
                author: packageJson.author || 'Unknown',
                license: packageJson.license || 'MIT',
                readmeContent,
                verified: true,
                installed: false,
                // Additional metadata
                main: packageJson.main || `${pluginId}.ts`,
                dependencies: packageJson.dependencies || {},
                componentVersion: componentMetadata.componentVersion || packageJson.version
            };

            res.json(pluginDetails);
        } catch (error) {
            console.error('Error reading plugin details:', error);
            res.status(500).json({ error: 'Failed to read plugin details' });
        }
    });

    app.use(basePath, router);
};

// Initialize and run the application
createApp();
