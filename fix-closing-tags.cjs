#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all plugin directories
const packagesDir = 'packages';
const pluginDirs = fs.readdirSync(packagesDir).filter(dir => 
    fs.statSync(path.join(packagesDir, dir)).isDirectory()
);

console.log(`Found ${pluginDirs.length} plugin directories`);

let totalUpdates = 0;

pluginDirs.forEach(pluginName => {
    const readmePath = path.join(packagesDir, pluginName, 'v1.0.0', 'README.md');
    
    if (!fs.existsSync(readmePath)) {
        console.log(`❌ README not found for ${pluginName}`);
        return;
    }
    
    let content = fs.readFileSync(readmePath, 'utf-8');
    let updates = 0;
    
    // Fix closing tags that don't have version numbers
    // Pattern: </zero-plugin-name> should become </zero-plugin-name-1.0.0>
    const closingTagRegex = new RegExp(`</${pluginName}>(?!-1\\.0\\.0)`, 'g');
    const matches = content.match(closingTagRegex);
    
    if (matches) {
        content = content.replace(closingTagRegex, `</${pluginName}-1.0.0>`);
        updates += matches.length;
        console.log(`🔧 Fixed ${matches.length} closing tags in ${pluginName}`);
    }
    
    // Also check for any cross-references to other plugins
    const allPluginNames = [
        'zero-rich-text-editor', 'zero-text-input', 'zero-checkbox', 'zero-textarea',
        'zero-dropdown', 'zero-input-widgets', 'zero-range-slider', 'zero-password-input',
        'zero-number-input', 'zero-file-input', 'zero-date-picker', 'zero-color-picker',
        'attribute-window', 'popup-dropdown', 'popup-dialog', 'code-editor',
        'popup-dropdown-directive', 'open-popup-directive', 'register-plugins', 'dynamic-js-injector'
    ];
    
    allPluginNames.forEach(otherPlugin => {
        if (otherPlugin === pluginName) return;
        
        const crossRefRegex = new RegExp(`</${otherPlugin}>(?!-1\\.0\\.0)`, 'g');
        const crossMatches = content.match(crossRefRegex);
        
        if (crossMatches) {
            content = content.replace(crossRefRegex, `</${otherPlugin}-1.0.0>`);
            updates += crossMatches.length;
            console.log(`🔗 Fixed ${crossMatches.length} cross-reference closing tags for ${otherPlugin} in ${pluginName}`);
        }
    });
    
    if (updates > 0) {
        fs.writeFileSync(readmePath, content, 'utf-8');
        totalUpdates += updates;
        console.log(`✅ Updated ${updates} closing tags in ${pluginName}`);
    } else {
        console.log(`✨ No closing tag issues found in ${pluginName}`);
    }
});

console.log(`\n🎉 COMPLETED: Fixed ${totalUpdates} closing tags across all plugins`);
