# Multi-Version Support Strategy for Zero Components Marketplace

## Overview

This document outlines the strategy for supporting multiple versions of the same Lit components in the Zero Components marketplace, addressing component organization, marketplace UI enhancements, and version management.

## Current State Analysis

### Existing Version Registration
- Components are registered using `customElements.define(\`${elementSelector}-${version}\`, componentClass)`
- Each component has a `@RendererComponent` decorator with version metadata
- Package.json contains version information
- Components are organized in separate directories under `/packages`

### Current Limitations
- Marketplace treats each package directory as a single component
- No version comparison or grouping in the UI
- No support for upgrading/downgrading between versions
- No semantic versioning awareness

## Proposed Multi-Version Support Architecture

### 1. Directory Structure Options

#### Option A: Version Subdirectories (Recommended)
```
packages/
├── code-editor/
│   ├── v1.0.0/
│   │   ├── package.json
│   │   ├── code-editor.ts
│   │   └── README.md
│   ├── v1.1.0/
│   │   ├── package.json
│   │   ├── code-editor.ts
│   │   └── README.md
│   └── v2.0.0/
│       ├── package.json
│       ├── code-editor.ts
│       └── README.md
```

#### Option B: Component Name with Version Suffix
```
packages/
├── code-editor-v1.0.0/
├── code-editor-v1.1.0/
├── code-editor-v2.0.0/
└── zero-checkbox-v1.0.0/
```

#### Option C: Hybrid Approach (Flexible)
Support both structures - detect automatically based on directory contents.

### 2. Version Grouping and Identification

#### Component Identification Strategy
- **Component Family**: Base name without version (e.g., "code-editor")
- **Version String**: Semantic version (e.g., "1.0.0", "2.1.0-beta.1")
- **Element Selector**: Unique selector per version (e.g., "zero-code-editor-1.0.0")
- **Display Name**: Human-readable name with version (e.g., "Code Editor v2.0.0")

#### Version Parsing
```javascript
function parseComponentInfo(packagePath, packageJson) {
  const componentName = extractBaseComponentName(packagePath, packageJson);
  const version = parseVersion(packageJson.version);
  const isStable = !version.includes('alpha', 'beta', 'rc');
  const majorVersion = version.split('.')[0];
  
  return {
    family: componentName,
    version: version,
    isStable: isStable,
    majorVersion: majorVersion,
    fullName: `${componentName}-v${version}`,
    selector: `${packageJson.elementSelector || componentName}-${version}`
  };
}
```

### 3. Marketplace UI Enhancements

#### 3.1 Component Grouping
- Group components by family name
- Show version selector within each component family
- Default to latest stable version
- Indicate version stability (stable, beta, alpha)

#### 3.2 Version Selector UI
```html
<div class="component-family">
  <h3>Code Editor</h3>
  <div class="version-selector">
    <select class="version-dropdown">
      <option value="2.0.0" selected>v2.0.0 (Latest)</option>
      <option value="1.2.1">v1.2.1 (Stable)</option>
      <option value="1.1.0">v1.1.0</option>
      <option value="2.1.0-beta.1">v2.1.0-beta.1 (Beta)</option>
    </select>
  </div>
  <div class="component-card">
    <!-- Version-specific component details -->
  </div>
</div>
```

#### 3.3 Version Comparison Feature
- Side-by-side comparison of different versions
- Changelog display
- Migration guide links
- Breaking changes highlighting

#### 3.4 Version Badges
- Latest stable
- Beta/Alpha indicators
- Deprecated warnings
- LTS (Long Term Support) indicators

### 4. API Enhancements

#### 4.1 Enhanced Marketplace API Endpoints

```javascript
// Get all component families with versions
GET /marketplace/components
Response: {
  "code-editor": {
    "latest": "2.0.0",
    "latestStable": "1.2.1",
    "versions": ["2.0.0", "1.2.1", "1.1.0", "2.1.0-beta.1"],
    "deprecated": ["1.0.0"]
  }
}

// Get specific version details
GET /marketplace/components/:family/:version
GET /marketplace/components/code-editor/2.0.0

// Get version comparison
GET /marketplace/components/:family/compare/:version1/:version2
GET /marketplace/components/code-editor/compare/1.2.1/2.0.0
```

#### 4.2 Version Metadata Enhancement
```javascript
function extractVersionMetadata(componentPath) {
  return {
    // Basic info
    family: extractComponentFamily(componentPath),
    version: parseVersion(packageJson.version),
    
    // Version classification
    isLatest: isLatestVersion(version, allVersions),
    isStable: !version.includes('alpha', 'beta', 'rc'),
    isDeprecated: checkDeprecationStatus(version),
    isLTS: checkLTSStatus(version),
    
    // Compatibility
    compatibleWith: extractCompatibilityInfo(),
    breakingChanges: extractBreakingChanges(),
    
    // Migration
    upgradeInstructions: extractUpgradeInstructions(),
    migrationGuide: findMigrationGuide()
  };
}
```

### 5. Version Management Features

#### 5.1 Upgrade/Downgrade Support
- Installation commands for specific versions
- Migration scripts when available
- Compatibility warnings
- Dependency impact analysis

#### 5.2 Changelog Integration
- Parse CHANGELOG.md files per version
- Display version-specific changes
- Highlight breaking changes
- Show new features and bug fixes

#### 5.3 Deprecation Management
- Mark deprecated versions
- Show replacement recommendations
- Sunset timeline information
- Migration paths

### 6. Search and Discovery Enhancements

#### 6.1 Version-Aware Search
- Search across all versions or specific version ranges
- Filter by version stability (stable, beta, alpha)
- Filter by major version
- Search by feature availability

#### 6.2 Recommendation Engine
- Suggest latest stable version
- Recommend LTS versions for production
- Alert about deprecated versions
- Suggest upgrades with migration paths

### 7. Implementation Plan

#### Phase 1: Foundation (Week 1)
1. ✅ Create version detection logic
2. ✅ Enhance marketplace API for version grouping
3. ✅ Update UI to display version information
4. ✅ Basic version selector functionality

#### Phase 2: Advanced Features (Week 2)
1. Version comparison UI
2. Changelog integration
3. Deprecation warnings
4. Advanced filtering

#### Phase 3: Enhanced User Experience (Week 3)
1. Migration guides
2. Compatibility checking
3. Recommendation engine
4. Enhanced search with version awareness

## Benefits

### For Developers
- Easy testing of different component versions
- Clear upgrade paths
- Better understanding of version differences
- Reduced risk in version upgrades

### For Users
- Access to stable and cutting-edge features
- Clear version stability information
- Easier rollback if issues occur
- Better project planning with LTS information

### For Maintainers
- Clearer version lifecycle management
- Better user feedback on version usage
- Easier deprecation communication
- Improved version adoption tracking

## Technical Considerations

### Performance
- Lazy loading of version metadata
- Caching of version comparison data
- Efficient storage of multiple versions

### Storage
- Minimize duplication of common assets
- Efficient organization of version-specific files
- CDN-friendly structure for component delivery

### Backward Compatibility
- Ensure existing single-version components continue to work
- Graceful fallback for missing version metadata
- Support for gradual migration to multi-version structure

## Conclusion

This multi-version support strategy provides a comprehensive approach to managing multiple versions of Lit components in the marketplace, improving developer experience, and enabling better version lifecycle management. The phased implementation ensures a smooth transition while providing immediate value.
