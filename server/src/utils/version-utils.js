/**
 * Version management utilities
 */

// Helper function to extract component family name
export const extractComponentFamily = (packageName) => {
    // Remove version suffixes like -v1.0.0, -1.0.0, etc.
    return packageName.replace(/-v?\d+\.\d+\.\d+.*$/, '');
};

// Helper function to parse semantic version
export const parseVersion = (versionString) => {
    const match = versionString.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/);
    if (!match) return null;
    
    return {
        major: parseInt(match[1]),
        minor: parseInt(match[2]),
        patch: parseInt(match[3]),
        prerelease: match[4] || null,
        original: versionString
    };
};

// Helper function to check if version is stable
export const isStableVersion = (version) => {
    return !version.includes('alpha') && !version.includes('beta') && !version.includes('rc');
};

// Helper function to compare two versions
export const compareVersions = (version1, version2) => {
    const v1 = parseVersion(version1);
    const v2 = parseVersion(version2);
    
    if (!v1 || !v2) return 0;
    
    if (v1.major !== v2.major) return v2.major - v1.major;
    if (v1.minor !== v2.minor) return v2.minor - v1.minor;
    if (v1.patch !== v2.patch) return v2.patch - v1.patch;
    
    // Handle prerelease versions
    if (v1.prerelease && !v2.prerelease) return 1;
    if (!v1.prerelease && v2.prerelease) return -1;
    if (v1.prerelease && v2.prerelease) return v2.prerelease.localeCompare(v1.prerelease);
    
    return 0;
};

// Find latest version from array
export const findLatestVersion = (versions) => {
    if (!versions || versions.length === 0) return null;
    
    return versions.reduce((latest, current) => {
        if (!latest) return current;
        
        const comparison = compareVersions(latest, current);
        return comparison > 0 ? current : latest;
    });
};

// Find latest stable version from array
export const findLatestStableVersion = (versions) => {
    if (!versions || versions.length === 0) return null;
    
    const stableVersions = versions.filter(v => isStableVersion(v));
    return findLatestVersion(stableVersions);
};
