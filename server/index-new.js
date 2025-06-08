/**
 * Modular Express server for Zero Components marketplace
 */
import express from 'express';
import fs from 'fs';
import path from 'path';
import { env } from 'node:process';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import route modules
import { setupFileRoutes } from './src/utils/file-utils.js';
import { setupMarketplaceRoutes } from './src/routes/marketplace.js';
import { setupLegacyRoutes } from './src/routes/legacy.js';
import { setupUploadRoutes } from './src/routes/upload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = env.PORT || 9000;
const basePath = env.BASE_PATH || '';

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
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

    // Basic routes
    router.get('/ping', (req, res) => {
        res.json({ message: 'Hello World!' });
    });

    // Redirect root to marketplace
    router.get('/', (req, res) => {
        res.redirect('/marketplace');
    });

    // Setup file management routes
    setupFileRoutes(router);

    // Setup marketplace API routes
    setupMarketplaceRoutes(router);

    // Setup legacy API routes
    setupLegacyRoutes(router);

    // Setup upload routes
    setupUploadRoutes(router);

    // Serve static files from 'plugins' directory
    router.use('/plugins', express.static('plugins'));

    // Serve marketplace UI
    router.use('/marketplace', express.static(path.resolve(__dirname, 'marketplace')));

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
