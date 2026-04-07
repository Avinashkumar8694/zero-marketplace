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
import dotenv from 'dotenv';

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from root directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Import route modules
import { setupFileRoutes } from './src/utils/file-utils.js';
import { setupMarketplaceRoutes } from './src/routes/marketplace.js';
import { setupLegacyRoutes } from './src/routes/legacy.js';
import { setupUploadRoutes } from './src/routes/upload.js';

// Initialize feature flags after environment variables are loaded
import { initializeFeatureFlags, getAllFeatureFlags, isFeatureEnabled, isComingSoon } from './src/config/features.js';
const featureFlags = initializeFeatureFlags();

// Create Express app with environment variables
const app = express();
const port = process.env.PORT || 9000;
const basePath = process.env.BASE_PATH || '';
const componentsDir = process.env.COMPONENTS_DIR || 'packages';
const uploadDir = process.env.UPLOAD_DIR || 'server/uploads';
const tempDir = process.env.TEMP_DIR || 'server/temp';
const extraComponentsDir = process.env.EXTRA_COMPONENTS_DIR || '';

app.use(express.json());

// Use CORS middleware with environment variables
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: process.env.CORS_METHODS?.split(',') || ['GET', 'POST', 'DELETE'],
    allowedHeaders: process.env.CORS_HEADERS?.split(',') || ['Content-Type'],
}));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, 'marketplace'),
    path.join(__dirname, 'views'),
]);

// Setup base folders
const setupFolders = async () => {
    const folders = [
        uploadDir,
        tempDir,
        componentsDir
    ];
    
    if (extraComponentsDir) {
        folders.push(extraComponentsDir);
    }
    
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
const setupRoutes = (app, basePath, featureFlags) => {
    const router = express.Router();

    // Basic routes
    router.get('/ping', (req, res) => {
        res.json({ message: 'Hello World!' });
    });

    // Setup routes with environment variables and feature flags
    setupFileRoutes(router);
    setupMarketplaceRoutes(router, featureFlags);
    setupLegacyRoutes(router);
    setupUploadRoutes(router);

    // Serve static files
    router.use('/plugins', express.static(path.join(__dirname, componentsDir)));
    router.use('/plugins-build', express.static(path.join(__dirname, 'plugins-build')));
    router.use('/marketplace', express.static(path.join(__dirname, 'marketplace')));
    
    // Serve extra components (e.g., flow nodes from zero-components)
    if (extraComponentsDir) {
        const extraPath = path.isAbsolute(extraComponentsDir) 
            ? extraComponentsDir 
            : path.join(__dirname, extraComponentsDir);
        router.use('/plugins-extra', express.static(extraPath));
    }

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
    setupRoutes(app, basePath, featureFlags);

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}${basePath}`);
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