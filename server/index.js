/**
 * Main server configuration and setup
 */
import express from 'express';
import path from 'path';
import { env } from 'node:process';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';
import AdmZip from 'adm-zip';

// Import route modules
import { setupFileRoutes } from './src/utils/file-utils.js';
import { setupMarketplaceRoutes } from './src/routes/marketplace.js';
import { setupLegacyRoutes } from './src/routes/legacy.js';
import { setupUploadRoutes } from './src/routes/upload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();
const port = env.PORT || 9000;
const basePath = env.BASE_PATH || '';

// Setup middleware
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Set EJS as the view engine
import ejs from 'ejs';
app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, 'marketplace'),
    path.join(__dirname, 'views'),
]);

// Setup base folders
const setupFolders = async () => {
    const folders = [
        'uploads',
        'temp'
    ];
    
    for (const folder of folders) {
        const folderPath = path.join(__dirname, folder);
        try {
            await fs.access(folderPath);
        } catch {
            await fs.mkdir(folderPath, { recursive: true });
        }
    }
};

// Setup application routes
const setupRoutes = (app, basePath) => {
    const router = express.Router();

    // Basic routes
    router.get('/ping', (req, res) => {
        res.json({ message: 'Hello World!' });
    });

    // Marketplace EJS UI route (should be before static)
    router.get('/marketplace', (req, res) => {
        res.render('marketplace-plugins', {
            title: 'Zero Components Market',
        });
    });

    // Upload plugin page
    router.get('/marketplace/upload', (req, res) => {
        res.render('upload-plugin', {
            title: 'Upload Plugin'
        });
    });

    // Redirect root to marketplace
    router.get('/', (req, res) => {
        res.redirect('/marketplace');
    });

    // API to upload and extract plugin zip
    router.post('/api/upload-plugin', async (req, res) => {
        try {
            // Use multer for file upload
            const multer = (await import('multer')).default;
            const upload = multer({ dest: path.join(__dirname, 'temp') }).single('pluginZip');
            upload(req, res, async function (err) {
                if (err) {
                    return res.status(500).json({ error: 'File upload failed' });
                }
                if (!req.file) {
                    return res.status(400).json({ error: 'No file uploaded' });
                }
                const zipPath = req.file.path;
                const zip = new AdmZip(zipPath);
                // Extract to a temp directory
                const tempExtractPath = path.join(__dirname, 'temp', Date.now().toString());
                zip.extractAllTo(tempExtractPath, true);
                // Find the plugin root (assume first folder or files in zip)
                const entries = await fs.readdir(tempExtractPath);
                let pluginRoot = tempExtractPath;
                if (entries.length === 1) {
                    const first = path.join(tempExtractPath, entries[0]);
                    const stat = await fs.stat(first);
                    if (stat.isDirectory()) pluginRoot = first;
                }
                // Read package.json for name and version
                const pkgPath = path.join(pluginRoot, 'package.json');
                const pkg = JSON.parse(await fs.readFile(pkgPath, 'utf-8'));
                // Structure: packages/{pluginName}/v{version}/...
                const destDir = path.join(__dirname, '..', 'packages', pkg.name, `v${pkg.version}`);
                await fs.mkdir(destDir, { recursive: true });
                // Move all plugin files to the correct location
                const files = await fs.readdir(pluginRoot);
                for (const file of files) {
                    await fs.rename(
                        path.join(pluginRoot, file),
                        path.join(destDir, file)
                    );
                }
                // Cleanup
                await fs.rm(tempExtractPath, { recursive: true, force: true });
                await fs.rm(zipPath, { force: true });
                res.json({ success: true, message: 'Plugin uploaded and restructured', name: pkg.name, version: pkg.version });
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Setup routes
    setupFileRoutes(router);
    setupMarketplaceRoutes(router);
    setupLegacyRoutes(router);
    setupUploadRoutes(router);

    // Serve static files
    router.use('/plugins', express.static(path.join(__dirname, 'plugins')));
    router.use('/plugins-build', express.static(path.join(__dirname, 'plugins-build')));
    router.use('/marketplace', express.static(path.join(__dirname, 'marketplace')));

    // Mount router with optional base path
    if (basePath) {
        app.use(basePath, router);
    } else {
        app.use(router);
    }
};

// Initialize application
const init = async () => {
    await setupFolders();
    setupRoutes(app, basePath);

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}${basePath}`);
        console.log(`Marketplace available at http://localhost:${port}${basePath}/marketplace`);
    });
};

// Start the server
try {
    await init();
} catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
}

export default app;