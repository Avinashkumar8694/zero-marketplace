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

    // Redirect root to marketplace
    router.get('/', (req, res) => {
        res.redirect('/marketplace');
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