#!/usr/bin/env node

/**
 * Package Restructuring Script for Zero Components Multi-Version Support
 * 
 * This script restructures the packages directory to support multi-version architecture
 * as outlined in the MULTI_VERSION_STRATEGY.md document.
 * 
 * Structure: Option A - Version Subdirectories (Recommended)
 * packages/
 * ├── component-name/
 * │   ├── v1.0.0/
 * │   │   ├── package.json
 * │   │   ├── component-name.ts
 * │   │   ├── README.md
 * │   │   └── assets/
 * │   ├── v1.1.0/
 * │   │   └── ... (same structure)
 * │   └── v2.0.0/
 * │       └── ... (same structure)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const PACKAGES_DIR = path.resolve(__dirname, '../packages');
const BACKUP_DIR = path.resolve(__dirname, '../packages-backup');
const DRY_RUN = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');
const VERBOSE = process.argv.includes('--verbose');

// Color codes for console output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

/**
 * Logging utility with colors
 */
const logger = {
    info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
    success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
    warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
    error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
    verbose: (msg) => VERBOSE && console.log(`${colors.cyan}→${colors.reset} ${msg}`)
};

/**
 * Helper function to create directories recursively
 */
function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        if (!DRY_RUN) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        logger.verbose(`Created directory: ${dirPath}`);
    }
}

/**
 * Copy file from source to destination
 */
function copyFile(src, dest) {
    ensureDirectoryExists(path.dirname(dest));
    if (!DRY_RUN) {
        fs.copyFileSync(src, dest);
    }
    logger.verbose(`Copied: ${src} → ${dest}`);
}

/**
 * Copy directory recursively
 */
function copyDirectory(src, dest) {
    ensureDirectoryExists(dest);
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            copyDirectory(srcPath, destPath);
        } else {
            copyFile(srcPath, destPath);
        }
    }
}

/**
 * Extract component family name by removing version suffixes
 */
function extractComponentFamily(packageName) {
    // Remove version suffixes like -v1.0.0, -1.0.0, etc.
    return packageName.replace(/-v?\d+\.\d+\.\d+.*$/, '');
}

/**
 * Parse semantic version from string
 */
function parseVersion(versionString) {
    const match = versionString.match(/^(\d+)\.(\d+)\.(\d+)(?:-(.+))?$/);
    if (!match) return null;
    
    return {
        major: parseInt(match[1]),
        minor: parseInt(match[2]),
        patch: parseInt(match[3]),
        prerelease: match[4] || null,
        original: versionString
    };
}

/**
 * Use only the existing version from package.json (no additional versions)
 */
function generateAdditionalVersions(baseVersion) {
    const parsed = parseVersion(baseVersion);
    if (!parsed) return [baseVersion];
    
    // Only return the original version, don't generate additional ones
    return [baseVersion];
}

/**
 * Update package.json for specific version
 */
function updatePackageJsonForVersion(packageJsonContent, version, family) {
    const packageJson = JSON.parse(packageJsonContent);
    
    // Keep the original version from package.json (don't change it)
    // packageJson.version = version; // Remove this line to preserve original version
    
    // Keep the original name unchanged
    // const originalName = packageJson.name; // Keep original name as-is
    
    // Add version-specific metadata
    if (!packageJson.zero) {
        packageJson.zero = {};
    }
    
    packageJson.zero.version = version;
    packageJson.zero.family = family;
    packageJson.zero.structure = 'versioned';
    
    // Add version-specific keywords
    if (!packageJson.keywords) {
        packageJson.keywords = [];
    }
    
    if (!packageJson.keywords.includes(version)) {
        packageJson.keywords.push(`v${version}`);
    }
    
    return JSON.stringify(packageJson, null, 2);
}

/**
 * Update README.md for specific version
 */
function updateReadmeForVersion(readmeContent, version, family) {
    if (!readmeContent) {
        return `# ${family} v${version}\n\nComponent version ${version} of the ${family} family.\n\n## Installation\n\n\`\`\`bash\nnpm install @zero-components/${family}@${version}\n\`\`\`\n`;
    }
    
    // Add version information to existing README
    const versionHeader = `# ${family} v${version}\n\n> **Version**: ${version}\n> **Family**: ${family}\n\n`;
    
    // Remove existing h1 if present and add new version header
    const updatedContent = readmeContent.replace(/^#\s+.*\n?/m, '');
    
    return versionHeader + updatedContent;
}

/**
 * Check if a directory is already restructured to multi-version format
 */
function isDirectoryRestructured(dirPath) {
    try {
        const contents = fs.readdirSync(dirPath, { withFileTypes: true });
        // Check if directory contains version subdirectories (starting with 'v' followed by semver)
        return contents.some(item => 
            item.isDirectory() && 
            /^v\d+\.\d+\.\d+/.test(item.name)
        );
    } catch {
        return false;
    }
}

/**
 * Scan existing packages and group by family
 */
function scanExistingPackages() {
    logger.info('Scanning existing packages...');
    
    const packages = new Map();
    
    if (!fs.existsSync(PACKAGES_DIR)) {
        logger.error(`Packages directory not found: ${PACKAGES_DIR}`);
        return packages;
    }
    
    const packageDirs = fs.readdirSync(PACKAGES_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    
    logger.info(`Found ${packageDirs.length} package directories`);
    
    for (const packageDir of packageDirs) {
        const packagePath = path.join(PACKAGES_DIR, packageDir);
        
        // Skip already versioned directories or test directories
        if (packageDir.endsWith('-versioned') || isDirectoryRestructured(packagePath)) {
            logger.verbose(`Skipping already restructured directory: ${packageDir}`);
            continue;
        }
        
        const packageJsonPath = path.join(packagePath, 'package.json');
        
        if (!fs.existsSync(packageJsonPath)) {
            logger.warning(`No package.json found in ${packageDir}, skipping`);
            continue;
        }
        
        try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            const version = packageJson.version || '1.0.0';
            const family = extractComponentFamily(packageDir);
            
            if (!packages.has(family)) {
                packages.set(family, []);
            }
            
            packages.get(family).push({
                originalDir: packageDir,
                path: packagePath,
                version: version,
                packageJson: packageJson
            });
            
            logger.verbose(`Mapped ${packageDir} → ${family} v${version}`);
            
        } catch (error) {
            logger.error(`Error reading package.json for ${packageDir}: ${error.message}`);
        }
    }
    
    return packages;
}

/**
 * Create versioned structure for a component family
 */
function createVersionedStructure(family, packageInfos) {
    logger.info(`Creating versioned structure for ${family}...`);
    
    const familyDir = path.join(PACKAGES_DIR, family);
    
    // Check if family directory already exists and is restructured
    if (fs.existsSync(familyDir) && isDirectoryRestructured(familyDir)) {
        logger.warning(`${family} already restructured, skipping...`);
        return;
    }
    
    // Get all unique versions for this family
    const allVersions = new Set();
    
    for (const packageInfo of packageInfos) {
        const versions = generateAdditionalVersions(packageInfo.version);
        versions.forEach(v => allVersions.add(v));
    }
    
    const sortedVersions = Array.from(allVersions).sort((a, b) => {
        const vA = parseVersion(a);
        const vB = parseVersion(b);
        if (!vA || !vB) return 0;
        
        if (vA.major !== vB.major) return vA.major - vB.major;
        if (vA.minor !== vB.minor) return vA.minor - vB.minor;
        if (vA.patch !== vB.patch) return vA.patch - vB.patch;
        
        return 0;
    });
    
    logger.info(`Creating ${sortedVersions.length} versions for ${family}: ${sortedVersions.join(', ')}`);
    
    // Create a temporary directory to build the new structure
    const tempFamilyDir = path.join(PACKAGES_DIR, `${family}-temp`);
    ensureDirectoryExists(tempFamilyDir);
    
    // Use the first package as the base for all versions
    const basePackageInfo = packageInfos[0];
    
    for (const version of sortedVersions) {
        const versionDir = path.join(tempFamilyDir, `v${version}`);
        ensureDirectoryExists(versionDir);
        
        // Copy all files from the original package
        const entries = fs.readdirSync(basePackageInfo.path, { withFileTypes: true });
        
        for (const entry of entries) {
            const srcPath = path.join(basePackageInfo.path, entry.name);
            const destPath = path.join(versionDir, entry.name);
            
            if (entry.isDirectory()) {
                copyDirectory(srcPath, destPath);
            } else if (entry.name === 'package.json') {
                // Update package.json for this version
                const originalContent = fs.readFileSync(srcPath, 'utf8');
                const updatedContent = updatePackageJsonForVersion(originalContent, version, family);
                
                if (!DRY_RUN) {
                    ensureDirectoryExists(path.dirname(destPath));
                    fs.writeFileSync(destPath, updatedContent);
                }
                logger.verbose(`Updated package.json for ${family} v${version}`);
            } else if (entry.name === 'README.md') {
                // Update README for this version
                const originalContent = fs.readFileSync(srcPath, 'utf8');
                const updatedContent = updateReadmeForVersion(originalContent, version, family);
                
                if (!DRY_RUN) {
                    ensureDirectoryExists(path.dirname(destPath));
                    fs.writeFileSync(destPath, updatedContent);
                }
                logger.verbose(`Updated README.md for ${family} v${version}`);
            } else {
                copyFile(srcPath, destPath);
            }
        }
        
        logger.success(`Created version ${version} for ${family}`);
    }
    
    // Remove the original package directory and rename temp to final name
    if (!DRY_RUN) {
        // Remove original directory
        fs.rmSync(basePackageInfo.path, { recursive: true, force: true });
        
        // Rename temp directory to final name
        fs.renameSync(tempFamilyDir, familyDir);
    }
    
    logger.success(`Successfully restructured ${family} with ${sortedVersions.length} versions`);
}

/**
 * Create backup of existing packages
 */
function createBackup() {
    if (fs.existsSync(BACKUP_DIR) && !FORCE) {
        logger.error(`Backup directory already exists: ${BACKUP_DIR}`);
        logger.error('Use --force to overwrite or remove the backup directory manually');
        return false;
    }
    
    logger.info('Creating backup of existing packages...');
    
    if (!DRY_RUN) {
        if (fs.existsSync(BACKUP_DIR)) {
            fs.rmSync(BACKUP_DIR, { recursive: true, force: true });
        }
        copyDirectory(PACKAGES_DIR, BACKUP_DIR);
    }
    
    logger.success(`Backup created at: ${BACKUP_DIR}`);
    return true;
}

/**
 * Generate migration summary
 */
function generateMigrationSummary(packages) {
    logger.info('Migration Summary:');
    logger.info('================');
    
    let totalComponents = 0;
    let totalVersions = 0;
    
    for (const [family, packageInfos] of packages) {
        const versions = new Set();
        for (const info of packageInfos) {
            const generatedVersions = generateAdditionalVersions(info.version);
            generatedVersions.forEach(v => versions.add(v));
        }
        
        totalComponents++;
        totalVersions += versions.size;
        
        logger.info(`${family}:`);
        logger.info(`  • Original packages: ${packageInfos.length}`);
        logger.info(`  • Generated versions: ${versions.size}`);
        logger.info(`  • Versions: ${Array.from(versions).join(', ')}`);
    }
    
    logger.info('================');
    logger.info(`Total component families: ${totalComponents}`);
    logger.info(`Total versions: ${totalVersions}`);
}

/**
 * Main restructuring function
 */
function main() {
    console.log(`${colors.magenta}
╔══════════════════════════════════════════════════════════════════╗
║                Zero Components Package Restructurer              ║
║                   Multi-Version Support Setup                   ║
╚══════════════════════════════════════════════════════════════════╝
${colors.reset}`);
    
    logger.info(`Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
    logger.info(`Packages directory: ${PACKAGES_DIR}`);
    logger.info(`Backup directory: ${BACKUP_DIR}`);
    
    // Scan existing packages
    const packages = scanExistingPackages();
    
    if (packages.size === 0) {
        logger.error('No packages found to restructure');
        return;
    }
    
    // Generate migration summary
    generateMigrationSummary(packages);
    
    if (DRY_RUN) {
        logger.warning('This is a dry run. No files will be modified.');
        logger.info('Run without --dry-run to perform the actual restructuring');
        return;
    }
    
    // Create backup
    if (!createBackup()) {
        return;
    }
    
    logger.info('Starting package restructuring...');
    
    // Create versioned structures
    for (const [family, packageInfos] of packages) {
        try {
            createVersionedStructure(family, packageInfos);
        } catch (error) {
            logger.error(`Error creating versioned structure for ${family}: ${error.message}`);
        }
    }
    
    logger.success('Package restructuring completed!');
    
    console.log(`
${colors.green}Next Steps:${colors.reset}
1. Review the new versioned structure in the packages directory
2. Test the marketplace server with: cd server && npm start
3. Verify the new API endpoints work correctly
4. Update your documentation and deployment scripts
5. If everything looks good, you can remove the backup: ${BACKUP_DIR}

${colors.blue}New API Endpoints:${colors.reset}
• GET /marketplace/components - List all component families with versions
• GET /marketplace/components/:family/:version - Get specific version details
• GET /marketplace/components/:family/compare/:v1/:v2 - Compare versions

${colors.yellow}Original packages backed up to:${colors.reset} ${BACKUP_DIR}
`);
}

// Run the script
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    main();
}

export { main, scanExistingPackages, createVersionedStructure, extractComponentFamily };
