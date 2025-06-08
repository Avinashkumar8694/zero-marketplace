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

    // Marketplace API endpoints
    
    // Get all packages/plugins from the packages directory
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

                        plugins.push({
                            id: packageDir,
                            name: packageJson.name || packageDir,
                            version: packageJson.version || '1.0.0',
                            description: packageJson.description || 'No description available',
                            title: componentMetadata.title || packageJson.name || packageDir,
                            group: componentMetadata.group || 'Components',
                            keywords: packageJson.keywords || [],
                            author: packageJson.author || 'Unknown',
                            license: packageJson.license || 'MIT',
                            hasReadme,
                            verified: true, // All internal components are verified
                            installed: false // For marketplace UI consistency
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
