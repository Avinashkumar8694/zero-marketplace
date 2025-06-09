/**
 * Legacy API routes for backward compatibility
 */
import path from 'path';
import { fileURLToPath } from 'url';
import { scanComponentStructure, extractComponentMetadata } from '../utils/component-utils.js';
import { extractComponentFamily, isStableVersion } from '../utils/version-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupLegacyRoutes = (router) => {
    // Get all packages/plugins from the packages directory (legacy endpoint)
    router.get('/marketplace/plugins', async (req, res) => {
        try {
            const packagesDir = path.resolve(__dirname, '../../../packages');
            const components = scanComponentStructure(packagesDir);
            const plugins = [];

            // Flatten all versions into a single list for legacy compatibility
            for (const [family, versions] of components) {
                for (const [version, componentData] of versions) {
                    const packageJson = componentData.packageJson;
                    const componentMetadata = extractComponentMetadata(componentData.path, componentData.directoryName);
                    
                    // Read README content
                    const fs = await import('fs');
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
            const packagesDir = path.resolve(__dirname, '../../../packages');
            
            // First try to find the plugin in the current flat structure
            const fs = await import('fs');
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

    return router;
};

export { setupLegacyRoutes };
