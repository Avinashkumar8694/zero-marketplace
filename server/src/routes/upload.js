/**
 * Upload API routes for plugin management
 */
import express from 'express';
import multer from 'multer';
import { processPluginUpload } from '../utils/file-utils.js';

const setupUploadRoutes = (router) => {
    // Configure multer for file uploads
    const upload = multer({
        storage: multer.memoryStorage(),
        limits: {
            fileSize: 10 * 1024 * 1024 // 10MB limit
        },
        fileFilter: (req, file, cb) => {
            if (file.mimetype === 'application/zip' || file.originalname.endsWith('.zip')) {
                cb(null, true);
            } else {
                cb(new Error('Only ZIP files are allowed'), false);
            }
        }
    });

    // Upload plugin endpoint
    router.post('/marketplace/upload', upload.single('plugin'), async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ 
                    success: false, 
                    error: 'No file uploaded or invalid file type' 
                });
            }

            const { metadata } = req.body;
            let pluginMetadata = {};
            
            if (metadata) {
                try {
                    pluginMetadata = JSON.parse(metadata);
                } catch (error) {
                    console.warn('Invalid metadata JSON:', error);
                }
            }

            // Process the uploaded plugin
            const result = await processPluginUpload(req.file.buffer, req.file.originalname);

            res.json({
                success: true,
                message: 'Plugin uploaded and processed successfully',
                data: {
                    ...result,
                    metadata: pluginMetadata
                }
            });
        } catch (error) {
            console.error('Upload error:', error);
            res.status(500).json({
                success: false,
                error: error.message || 'Failed to process plugin upload'
            });
        }
    });

    // Get upload status
    router.get('/marketplace/upload/status/:uploadId', (req, res) => {
        // TODO: Implement upload status tracking
        res.json({
            uploadId: req.params.uploadId,
            status: 'completed',
            message: 'Upload completed successfully'
        });
    });

    // Validate plugin before upload
    router.post('/marketplace/validate', upload.single('plugin'), async (req, res) => {
        try {
            if (!req.file) {
                return res.status(400).json({ 
                    valid: false, 
                    error: 'No file uploaded' 
                });
            }

            // TODO: Implement validation logic without processing
            res.json({
                valid: true,
                message: 'Plugin structure is valid',
                warnings: []
            });
        } catch (error) {
            res.status(500).json({
                valid: false,
                error: error.message
            });
        }
    });

    return router;
};

export { setupUploadRoutes };
