/**
 * Feature flags configuration for the Zero Components Marketplace
 * Controls which features are enabled or disabled
 */

// Load environment variables
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from root directory
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

/**
 * Feature flag configuration
 * Each feature can be controlled via environment variables or default values
 */
export const featureFlags = {
    // Upload functionality
    UPLOAD_ENABLED: process.env.FEATURE_UPLOAD_ENABLED === 'true' || false,
    
    // Plans/pricing functionality  
    PLANS_ENABLED: process.env.FEATURE_PLANS_ENABLED === 'true' || false,
    
    // Individual plan availability
    PRO_PLAN_ENABLED: process.env.FEATURE_PRO_PLAN_ENABLED === 'true' || false,
    ENTERPRISE_PLAN_ENABLED: process.env.FEATURE_ENTERPRISE_PLAN_ENABLED === 'true' || false,
    
    // Marketplace browsing (always enabled for now)
    MARKETPLACE_ENABLED: process.env.FEATURE_MARKETPLACE_ENABLED !== 'false',
    
    // User authentication features
    AUTH_ENABLED: process.env.FEATURE_AUTH_ENABLED === 'true' || false,
    
    // Component search and filtering
    SEARCH_ENABLED: process.env.FEATURE_SEARCH_ENABLED !== 'false',
    
    // Component analytics and stats
    ANALYTICS_ENABLED: process.env.FEATURE_ANALYTICS_ENABLED === 'true' || false,
    
    // Admin features
    ADMIN_ENABLED: process.env.FEATURE_ADMIN_ENABLED === 'true' || false,
    
    // Beta features flag
    BETA_FEATURES_ENABLED: process.env.FEATURE_BETA_ENABLED === 'true' || false
};

/**
 * Get the status of a specific feature flag
 * @param {string} flagName - The name of the feature flag
 * @returns {boolean} - Whether the feature is enabled
 */
export function isFeatureEnabled(flagName) {
    return featureFlags[flagName] || false;
}

/**
 * Get all feature flags for template rendering
 * @returns {object} - Object containing all feature flags
 */
export function getAllFeatureFlags() {
    return { ...featureFlags };
}

/**
 * Check if a feature should show "coming soon" messaging
 * @param {string} flagName - The name of the feature flag
 * @returns {boolean} - Whether to show coming soon messaging
 */
export function isComingSoon(flagName) {
    return !isFeatureEnabled(flagName);
}

/**
 * Get feature flag configuration for client-side use
 * Only returns non-sensitive flags
 * @returns {object} - Public feature flags
 */
export function getPublicFeatureFlags() {
    return {
        UPLOAD_ENABLED: featureFlags.UPLOAD_ENABLED,
        PLANS_ENABLED: featureFlags.PLANS_ENABLED,
        PRO_PLAN_ENABLED: featureFlags.PRO_PLAN_ENABLED,
        ENTERPRISE_PLAN_ENABLED: featureFlags.ENTERPRISE_PLAN_ENABLED,
        MARKETPLACE_ENABLED: featureFlags.MARKETPLACE_ENABLED,
        SEARCH_ENABLED: featureFlags.SEARCH_ENABLED,
        BETA_FEATURES_ENABLED: featureFlags.BETA_FEATURES_ENABLED
    };
}

// Export individual flags for convenience
export const {
    UPLOAD_ENABLED,
    PLANS_ENABLED,
    PRO_PLAN_ENABLED,
    ENTERPRISE_PLAN_ENABLED,
    MARKETPLACE_ENABLED,
    AUTH_ENABLED,
    SEARCH_ENABLED,
    ANALYTICS_ENABLED,
    ADMIN_ENABLED,
    BETA_FEATURES_ENABLED
} = featureFlags;

// Log current feature flag status (only in development)
if (process.env.NODE_ENV !== 'production') {
    console.log('🏁 Feature Flags Status:', featureFlags);
}
