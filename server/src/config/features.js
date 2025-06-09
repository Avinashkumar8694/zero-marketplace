/**
 * Feature flags configuration for the Zero Components Marketplace
 * Controls which features are enabled or disabled
 */

// Cache for feature flags to avoid re-evaluating
let _featureFlags = null;

/**
 * Initialize feature flags from environment variables
 * This function should be called after dotenv has loaded the environment
 */
export function initializeFeatureFlags() {
    // Debug: Log environment variable loading
    console.log('🔍 Environment Variables Debug:');
    console.log('FEATURE_UPLOAD_ENABLED:', process.env.FEATURE_UPLOAD_ENABLED);
    
    _featureFlags = {
        // Upload functionality
        UPLOAD_ENABLED: process.env.FEATURE_UPLOAD_ENABLED === 'true',
        
        // Plans/pricing functionality  
        PLANS_ENABLED: process.env.FEATURE_PLANS_ENABLED === 'true',        // Individual plan availability
        FREE_PLAN_ENABLED: process.env.FEATURE_FREE_PLAN_ENABLED === 'true',
        PRO_PLAN_ENABLED: process.env.FEATURE_PRO_PLAN_ENABLED === 'true',
        ENTERPRISE_PLAN_ENABLED: process.env.FEATURE_ENTERPRISE_PLAN_ENABLED === 'true',
        
        // Plan-specific features
        PLAN_BADGES_ENABLED: process.env.FEATURE_PLAN_BADGES_ENABLED === 'true',
        PLAN_BETA_NOTICES_ENABLED: process.env.FEATURE_PLAN_BETA_NOTICES_ENABLED === 'true',
        PLAN_CONTACT_SALES_ENABLED: process.env.FEATURE_PLAN_CONTACT_SALES_ENABLED === 'true',
        
        // Marketplace browsing (always enabled for now)
        MARKETPLACE_ENABLED: process.env.FEATURE_MARKETPLACE_ENABLED !== 'false',
          // User authentication features
        AUTH_ENABLED: process.env.FEATURE_AUTH_ENABLED === 'true',
        
        // Profile features
        PROFILE_ENABLED: process.env.FEATURE_PROFILE_ENABLED === 'true',
        
        // Component search and filtering
        SEARCH_ENABLED: process.env.FEATURE_SEARCH_ENABLED !== 'false',
          // Component analytics and stats
        ANALYTICS_ENABLED: process.env.FEATURE_ANALYTICS_ENABLED === 'true',
        
        // Support and help features
        SUPPORT_ENABLED: process.env.FEATURE_SUPPORT_ENABLED === 'true',
        
        // Admin features
        ADMIN_ENABLED: process.env.FEATURE_ADMIN_ENABLED === 'true',
        
        // Beta features flag
        BETA_FEATURES_ENABLED: process.env.FEATURE_BETA_ENABLED === 'true'
    };
    
    // Log current feature flag status (only in development)
    if (process.env.NODE_ENV !== 'production') {
        console.log('🏁 Feature Flags Status:', _featureFlags);
    }
    
    return _featureFlags;
}

/**
 * Get the feature flags object (lazy initialization)
 * @returns {object} - Object containing all feature flags
 */
export function getFeatureFlags() {
    if (!_featureFlags) {
        initializeFeatureFlags();
    }
    return _featureFlags;
}

/**
 * Get the status of a specific feature flag
 * @param {string} flagName - The name of the feature flag
 * @returns {boolean} - Whether the feature is enabled
 */
export function isFeatureEnabled(flagName) {
    const flags = getFeatureFlags();
    return flags[flagName] || false;
}

/**
 * Get all feature flags for template rendering
 * @returns {object} - Object containing all feature flags
 */
export function getAllFeatureFlags() {
    return { ...getFeatureFlags() };
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
    const flags = getFeatureFlags();
    return {
        UPLOAD_ENABLED: flags.UPLOAD_ENABLED,
        PLANS_ENABLED: flags.PLANS_ENABLED,
        PRO_PLAN_ENABLED: flags.PRO_PLAN_ENABLED,
        ENTERPRISE_PLAN_ENABLED: flags.ENTERPRISE_PLAN_ENABLED,
        MARKETPLACE_ENABLED: flags.MARKETPLACE_ENABLED,
        SEARCH_ENABLED: flags.SEARCH_ENABLED,
        BETA_FEATURES_ENABLED: flags.BETA_FEATURES_ENABLED
    };
}


