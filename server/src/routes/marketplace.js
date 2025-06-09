/**
 * Marketplace API routes
 */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { scanComponentStructure, extractComponentMetadata } from '../utils/component-utils.js';
import { parseVersion, isStableVersion, findLatestVersion, findLatestStableVersion } from '../utils/version-utils.js';
import { findMainJsFile } from '../utils/file-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure marketplace settings from environment variables
const DEFAULT_GROUP = process.env.DEFAULT_GROUP || 'Components';
const DEFAULT_LICENSE = process.env.DEFAULT_LICENSE || 'MIT';
const COMPONENTS_DIR = process.env.COMPONENTS_DIR || 'packages';

const setupMarketplaceRoutes = (router) => {
    // Get all component families with their versions
    router.get('/marketplace/components', async (req, res) => {
        try {
            const packagesDir = path.resolve(__dirname, `../../../${COMPONENTS_DIR}`);
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
                componentFamilies[family].latest = findLatestVersion(versionArray);
                componentFamilies[family].latestStable = findLatestStableVersion(versionArray);

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
            const packagesDir = path.resolve(__dirname, `../../../${COMPONENTS_DIR}`);
            const components = scanComponentStructure(packagesDir);
            
            if (!components.has(family) || !components.get(family).has(version)) {
                return res.status(404).json({ error: 'Component version not found' });
            }
            
            const componentData = components.get(family).get(version);
            const packageJson = componentData.packageJson;
            
            // Read README content if it exists
            const fs = await import('fs');
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
                group: componentMetadata.group || DEFAULT_GROUP,
                keywords: packageJson.keywords || [],
                author: packageJson.author || 'Unknown',
                license: packageJson.license || DEFAULT_LICENSE,
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
            const packagesDir = path.resolve(__dirname, `../../../${COMPONENTS_DIR}`);
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

    // Upload plugin page
    router.get('/marketplace/upload', (req, res) => {
        res.render(path.resolve(__dirname, '../../marketplace/upload-plugin.ejs'), {
            title: 'Upload Plugin - Zero Components Market'
        });
    });

    // Marketplace UI route (EJS)
    router.get('/marketplace', async (req, res) => {
        // Optionally, fetch plugin/component data here if you want to render server-side
        // For now, just render the EJS template (client JS will fetch data from API)
        res.render(path.resolve(__dirname, '../../marketplace/marketplace-plugins.ejs'), {
            title: 'Zero Components Market',
        });
    });    // Get component's main JS file
    router.get('/marketplace/components/:family/:version/js', async (req, res) => {
        try {
            const { family, version } = req.params;
            const packagesDir = path.resolve(__dirname, `../../../${COMPONENTS_DIR}`);
            const components = scanComponentStructure(packagesDir);
            
            if (!components.has(family) || !components.get(family).has(version)) {
                return res.status(404).json({ error: 'Component version not found' });
            }
            
            const componentData = components.get(family).get(version);
            const jsFiles = await findMainJsFile(componentData.path);
            
            if (!jsFiles || jsFiles.length === 0) {
                return res.status(404).json({ error: 'No JavaScript file found for component' });
            }

            // Read the file content
            const fs = await import('fs');
            const fileContent = fs.readFileSync(jsFiles[0], 'utf8');

            // Return the file content
            res.setHeader('Content-Type', 'application/javascript');
            res.send(fileContent);
        } catch (error) {
            console.error('Error getting component file:', error);
            res.status(500).json({ error: 'Failed to get component file' });
        }
    });

    // Landing page (Home)
    router.get('/', (req, res) => {
        req.app.render(
            path.resolve(__dirname, '../../marketplace/landing.ejs'),
            {},
            (err, html) => {
                if (err) {
                    console.error('Error rendering landing.ejs:', err);
                    return res.status(500).send('Error rendering landing page');
                }
                res.render(
                    path.resolve(__dirname, '../../marketplace/baselayout.ejs'),
                    {
                        title: 'Zero Marketplace - Home',
                        body: html
                    }
                );
            }
        );
    });

    return router;
};

export { setupMarketplaceRoutes };
