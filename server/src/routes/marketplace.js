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
const EXTRA_COMPONENTS_DIR = process.env.EXTRA_COMPONENTS_DIR || '';

/**
 * Create standardized template data with feature flags
 * @param {string} title - Page title
 * @param {object} featureFlags - Feature flags object
 * @param {object} additionalData - Additional template data
 * @returns {object} - Standardized template data
 */
const createTemplateData = (title, featureFlags, additionalData = {}) => {
    return {
        title,
        featureFlags,
        uploadEnabled: featureFlags.UPLOAD_ENABLED,
        plansEnabled: featureFlags.PLANS_ENABLED,
          // Individual plan flags
        freePlanEnabled: featureFlags.FREE_PLAN_ENABLED,
        proPlanEnabled: featureFlags.PRO_PLAN_ENABLED,
        enterprisePlanEnabled: featureFlags.ENTERPRISE_PLAN_ENABLED,
        
        // Plan-specific feature flags
        planBadgesEnabled: featureFlags.PLAN_BADGES_ENABLED,
        planBetaNoticesEnabled: featureFlags.PLAN_BETA_NOTICES_ENABLED,
        planContactSalesEnabled: featureFlags.PLAN_CONTACT_SALES_ENABLED,        // Other feature flags
        searchEnabled: featureFlags.SEARCH_ENABLED,
        marketplaceEnabled: featureFlags.MARKETPLACE_ENABLED,
        analyticsEnabled: featureFlags.ANALYTICS_ENABLED,
        supportEnabled: featureFlags.SUPPORT_ENABLED,
        authEnabled: featureFlags.AUTH_ENABLED,
        profileEnabled: featureFlags.PROFILE_ENABLED,
        adminEnabled: featureFlags.ADMIN_ENABLED,
        betaFeaturesEnabled: featureFlags.BETA_FEATURES_ENABLED,
        
        // Coming soon flags
        isUploadComingSoon: !featureFlags.UPLOAD_ENABLED,
        isPlansComingSoon: !featureFlags.PLANS_ENABLED,
        
        // Individual plan coming soon flags
        isFreePlanComingSoon: !featureFlags.FREE_PLAN_ENABLED,
        isProPlanComingSoon: !featureFlags.PRO_PLAN_ENABLED,
        isEnterprisePlanComingSoon: !featureFlags.ENTERPRISE_PLAN_ENABLED,        // Other coming soon flags
        isSearchComingSoon: !featureFlags.SEARCH_ENABLED,
        isAnalyticsComingSoon: !featureFlags.ANALYTICS_ENABLED,
        isSupportComingSoon: !featureFlags.SUPPORT_ENABLED,
        isAuthComingSoon: !featureFlags.AUTH_ENABLED,
        isProfileComingSoon: !featureFlags.PROFILE_ENABLED,
        isAdminComingSoon: !featureFlags.ADMIN_ENABLED,
        ...additionalData
    };
};

const setupMarketplaceRoutes = (router, featureFlags) => {
    // Helper function to scan directory and merge results
    const scanAllComponents = () => {
        const packagesDir = path.resolve(__dirname, `../../../${COMPONENTS_DIR}`);
        const components = scanComponentStructure(packagesDir);
        
        // Also scan extra components directory if configured
        if (EXTRA_COMPONENTS_DIR) {
            const extraPath = path.isAbsolute(EXTRA_COMPONENTS_DIR)
                ? EXTRA_COMPONENTS_DIR
                : path.resolve(__dirname, `../../../${EXTRA_COMPONENTS_DIR}`);
            
            try {
                const extraComponents = scanComponentStructure(extraPath);
                // Merge extra components into main components
                for (const [family, versions] of extraComponents) {
                    if (!components.has(family)) {
                        components.set(family, versions);
                    }
                }
            } catch (err) {
                console.warn('Could not scan extra components directory:', err.message);
            }
        }
        
        return components;
    };

    // Get all component families with their versions
    router.get('/marketplace/components', async (req, res) => {
        try {
            const components = scanAllComponents();
            const componentFamilies = {};

            // Find latest and latestStable versions
            for (const [family, versions] of components) {
                const versionArray = Array.from(versions.keys());
                const latest = findLatestVersion(versionArray);
                const latestStable = findLatestStableVersion(versionArray);
                
                // Get metadata for search if search query is provided
                const search = (req.query.search || "").toLowerCase().trim();
                if (search) {
                    const latestData = versions.get(latestStable || latest);
                    const pkg = latestData?.packageJson || {};
                    const haystack = [
                        family.toLowerCase(),
                        (pkg.name || "").toLowerCase(),
                        (pkg.description || "").toLowerCase(),
                        ...(pkg.keywords || []).map(k => k.toLowerCase())
                    ].join(" ");

                    if (!haystack.includes(search)) {
                        continue;
                    }
                }

                componentFamilies[family] = {
                    latest,
                    latestStable,
                    versions: versionArray,
                    structure: Array.from(versions.values()).map(v => v.structure).every(s => s === 'versioned') ? 'versioned' : 
                               (Array.from(versions.values()).map(v => v.structure).every(s => s === 'flat') ? 'flat' : 'mixed')
                };
            }

            // Pagination logic
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 0; // 0 means all for backward compatibility
            
            const familiesKeys = Object.keys(componentFamilies);
            const total = familiesKeys.length;
            
            let paginatedFamilies = {};
            if (limit > 0) {
                const startIndex = (page - 1) * limit;
                const endIndex = startIndex + limit;
                const slicedKeys = familiesKeys.slice(startIndex, endIndex);
                
                slicedKeys.forEach(key => {
                    paginatedFamilies[key] = componentFamilies[key];
                });
                
                res.json({
                    items: paginatedFamilies,
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit)
                });
            } else {
                res.json(componentFamilies); // Original behavior
            }
        } catch (error) {
            console.error('Error scanning components:', error);
            res.status(500).json({ error: 'Failed to scan components' });
        }
    });

    // Get specific version details
    router.get('/marketplace/components/:family/:version', async (req, res) => {
        try {
            const { family, version } = req.params;
            
            // Helper to find component in either directory
            const findComponent = () => {
                const packagesDir = path.resolve(__dirname, `../../../${COMPONENTS_DIR}`);
                const components = scanComponentStructure(packagesDir);
                
                if (components.has(family) && components.get(family).has(version)) {
                    return { components, baseDir: COMPONENTS_DIR };
                }
                
                // Check extra components directory
                if (EXTRA_COMPONENTS_DIR) {
                    const extraPath = path.isAbsolute(EXTRA_COMPONENTS_DIR)
                        ? EXTRA_COMPONENTS_DIR
                        : path.resolve(__dirname, `../../../${EXTRA_COMPONENTS_DIR}`);
                    
                    try {
                        const extraComponents = scanComponentStructure(extraPath);
                        if (extraComponents.has(family) && extraComponents.get(family).has(version)) {
                            return { components: extraComponents, baseDir: EXTRA_COMPONENTS_DIR, isExtra: true };
                        }
                    } catch (err) {
                        console.warn('Could not scan extra components:', err.message);
                    }
                }
                
                return null;
            };
            
            const result = findComponent();
            if (!result) {
                return res.status(404).json({ error: 'Component version not found' });
            }
            
            const { components, baseDir, isExtra } = result;
            const componentData = components.get(family).get(version);
            const packageJson = componentData.packageJson;
            
            // Read README content if it exists
            const fs = await import('fs');
            const readmePath = path.join(componentData.path, 'README.md');
            let readmeContent = '';
            if (fs.existsSync(readmePath)) {
                readmeContent = fs.readFileSync(readmePath, 'utf8');
            }
            
            // Check if component has an action.js (for flow nodes)
            const actionPath = path.join(componentData.path, 'action.js');
            const hasAction = fs.existsSync(actionPath);
            
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
                directoryName: componentData.directoryName,
                // Flow node action info
                hasAction: hasAction,
                actionUrl: isExtra 
                    ? (componentData.structure === 'versioned' ? `/plugins-extra/${family}/${componentData.directoryName}/action.js` : `/plugins-extra/${componentData.directoryName}/action.js`)
                    : (componentData.structure === 'versioned' ? `/plugins/${family}/${componentData.directoryName}/action.js` : `/plugins/${componentData.directoryName}/action.js`),
                jsEntry: isExtra
                    ? (componentData.structure === 'versioned' ? `/plugins-extra/${family}/${componentData.directoryName}/${family}.js` : `/plugins-extra/${componentData.directoryName}/${family}.js`)
                    : (componentData.structure === 'versioned' ? `/plugins/${family}/${componentData.directoryName}/${family}.js` : `/plugins/${componentData.directoryName}/${family}.js`),
                zero: packageJson.zero || {},
                layoutKind: componentMetadata.layoutKind,
                environment: componentMetadata.environment
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
    });    // Upload plugin page
    router.get('/marketplace/upload', (req, res) => {
        const templateData = createTemplateData('Upload Plugin - Zero Components Market', featureFlags);
        
        // Debug logging
        console.log('🔍 Upload route debug:');
        console.log('Environment FEATURE_UPLOAD_ENABLED:', process.env.FEATURE_UPLOAD_ENABLED);
        console.log('uploadEnabled:', templateData.uploadEnabled);
        console.log('isUploadComingSoon:', templateData.isUploadComingSoon);
        console.log('featureFlags.UPLOAD_ENABLED:', templateData.featureFlags.UPLOAD_ENABLED);
        
        res.render(path.resolve(__dirname, '../../marketplace/upload-plugin.ejs'), templateData);
    });// Plans page
    router.get('/marketplace/plans', (req, res) => {        // Define plans data structure
        const plansData = [
            {
                id: 'free',
                name: 'Free Trial',
                type: 'featured',
                price: {
                    currency: '$',
                    amount: '0',
                    period: '/month'
                },
                description: 'Perfect for developers getting started with Zero Components',
                featureFlag: 'FREE_PLAN_ENABLED', // Add feature flag for Free plan
                badge: {
                    icon: 'fas fa-flask',
                    text: 'Beta Version'
                },                features: [
                    { icon: 'fas fa-check', text: 'Access to all components' },
                    { icon: 'fas fa-check', text: 'Unlimited downloads' },
                    { icon: 'fas fa-times', text: 'Upload your own plugins' },
                    { icon: 'fas fa-times', text: 'Community support' },
                    { icon: 'fas fa-times', text: 'Regular updates' },
                    { icon: 'fas fa-check', text: 'Commercial usage allowed' },
                    { icon: 'fas fa-check', text: 'No credit card required' },
                    { icon: 'fas fa-info', text: 'Beta access to new features' }
                ],
                action: {
                    enabled: {
                        type: 'current',
                        text: 'Current Plan',
                        icon: 'fas fa-check-circle',
                        note: 'You\'re already on this plan!'
                    },
                    comingSoon: {
                        type: 'coming-soon',
                        text: 'Coming Soon',
                        icon: 'fas fa-clock',
                        note: 'Free plan will be available soon!'
                    }
                },
                showBetaNotice: true,
                showBetaDisclaimer: true
            },
            {
                id: 'pro',
                name: 'Pro Plan',
                type: 'pro',
                price: {
                    currency: '$',
                    amount: '9',
                    period: '/month'
                },
                description: 'Enhanced features for professional developers',
                featureFlag: 'PRO_PLAN_ENABLED',
                features: [
                    { icon: 'fas fa-plus', text: 'Upload your own plugins' },
                    { icon: 'fas fa-plus', text: 'Community support' },
                    { icon: 'fas fa-plus', text: 'Regular updates' },
                    { icon: 'fas fa-plus', text: 'Priority support' },
                    { icon: 'fas fa-plus', text: 'Advanced analytics' },
                    { icon: 'fas fa-plus', text: 'Custom themes' },
                    { icon: 'fas fa-plus', text: 'Team collaboration' },
                    { icon: 'fas fa-plus', text: 'Private components' },
                    { icon: 'fas fa-plus', text: 'API access' },
                    { icon: 'fas fa-plus', text: 'White-label options' }
                ],
                action: {
                    enabled: {
                        type: 'select',
                        text: 'Choose Pro Plan',
                        icon: 'fas fa-rocket',
                        note: 'Advanced features for professionals'
                    },
                    comingSoon: {
                        type: 'coming-soon',
                        text: 'Coming Soon',
                        icon: 'fas fa-clock',
                        note: 'Stay tuned for advanced features!'
                    }
                },
                featuresPrefix: 'Everything in Free, plus:'
            },
            {
                id: 'enterprise',
                name: 'Enterprise',
                type: 'enterprise',
                price: {
                    amount: 'Custom'
                },
                description: 'Tailored solutions for large organizations',
                featureFlag: 'ENTERPRISE_PLAN_ENABLED',
                features: [
                    { icon: 'fas fa-crown', text: 'Dedicated support' },
                    { icon: 'fas fa-crown', text: 'Custom integrations' },
                    { icon: 'fas fa-crown', text: 'On-premise deployment' },
                    { icon: 'fas fa-crown', text: 'SLA guarantees' },
                    { icon: 'fas fa-crown', text: 'Training & onboarding' },
                    { icon: 'fas fa-crown', text: 'Custom licensing' },
                    { icon: 'fas fa-crown', text: 'Unlimited users' }
                ],
                action: {
                    enabled: {
                        type: 'contact',
                        text: 'Contact Sales',
                        icon: 'fas fa-phone',
                        note: 'Let\'s discuss your needs'
                    },
                    comingSoon: {
                        type: 'coming-soon',
                        text: 'Coming Soon',
                        icon: 'fas fa-clock',
                        note: 'Enterprise features in development'
                    }
                },
                featuresPrefix: 'Everything in Pro, plus:'
            }
        ];        // Create comprehensive template data with feature flags
        const templateData = createTemplateData('Plans - Zero Components Market', featureFlags, {
            plans: plansData
        });

        res.render(path.resolve(__dirname, '../../marketplace/plans.ejs'), templateData);
    });    // Marketplace UI route (EJS)
    router.get('/marketplace', async (req, res) => {
        const templateData = createTemplateData('Zero Components Market', featureFlags);
        res.render(path.resolve(__dirname, '../../marketplace/marketplace-plugins.ejs'), templateData);
    });
    // Get component's main JS file
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
    });    // Marketplace UI route (EJS)
    router.get('/', async (req, res) => {
        const templateData = createTemplateData('Zero Components Market', featureFlags);
        res.render(path.resolve(__dirname, '../../marketplace/marketplace-plugins.ejs'), templateData);
    });
      // Landing page (Home)
    // router.get('/', (req, res) => {
        //     req.app.render(
            //         path.resolve(__dirname, '../../marketplace/landing.ejs'),
            //         {},
            //         (err, html) => {
    //             if (err) {
    //                 console.error('Error rendering landing.ejs:', err);
    //                 return res.status(500).send('Error rendering landing page');
    //             }
    //             res.render(
    //                 path.resolve(__dirname, '../../marketplace/baselayout.ejs'),
    //                 {
    //                     title: 'Zero Marketplace - Home',
    //                     body: html
    //                 }
    //             );
    //         }
    //     );
    // });    // Feature flags API endpoint
    router.get('/marketplace/api/features', (req, res) => {
        try {
            // Return comprehensive feature flags for client-side use
            const publicFeatureFlags = {
                // Feature flags
                ...featureFlags,
                // Helper methods for client-side checks
                isUploadComingSoon: !featureFlags.UPLOAD_ENABLED,
                isPlansComingSoon: !featureFlags.PLANS_ENABLED,
                isProPlanComingSoon: !featureFlags.PRO_PLAN_ENABLED,
                isEnterprisePlanComingSoon: !featureFlags.ENTERPRISE_PLAN_ENABLED,
                isSearchComingSoon: !featureFlags.SEARCH_ENABLED,
                isAnalyticsComingSoon: !featureFlags.ANALYTICS_ENABLED,
                isAuthComingSoon: !featureFlags.AUTH_ENABLED,
                isAdminComingSoon: !featureFlags.ADMIN_ENABLED,
                // Additional metadata
                lastUpdated: new Date().toISOString(),
                environment: process.env.NODE_ENV || 'development'
            };
            
            res.json(publicFeatureFlags);
        } catch (error) {
            console.error('Error getting feature flags:', error);
            res.status(500).json({ error: 'Failed to get feature flags' });
        }
    });

    return router;
};

export { setupMarketplaceRoutes };
