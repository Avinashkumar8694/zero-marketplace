// API base URL from environment
const API_BASE = window.ENV?.API_BASE_URL || 'http://localhost:9000';

// Global state
let allPlugins = [];
let filteredPlugins = [];
let currentPage = 1;
let itemsPerPage = 10;
let currentPlugin = null;
let currentSelectedVersion = null;
let allVersionData = {}; // Cache for version data

// DOM elements
const pluginGrid = document.getElementById('pluginGrid');
const searchInput = document.getElementById('searchInput');
const pagination = document.getElementById('pagination');
const loading = document.getElementById('loading');
const pluginModal = document.getElementById('pluginModal');
const notification = document.getElementById('notification');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadPlugins();
    setupSearchFilter();
});

// Load all plugins from API - now using multi-version endpoint
async function loadPlugins() {
    try {
        showLoading(true);
        
        // Use the new multi-version API to get component families
        const response = await fetch(`${API_BASE}/marketplace/components`);
        const componentFamilies = await response.json();
        
        // Convert component families to plugin format for display (latest versions only)
        allPlugins = await Promise.all(
            Object.entries(componentFamilies).map(async ([family, familyData]) => {
                try {
                    // Get the latest stable version details
                    const latestVersion = familyData.latestStable || familyData.latest;
                    const detailsResponse = await fetch(`${API_BASE}/marketplace/components/${family}/${latestVersion}`);
                    const details = await detailsResponse.json();
                    
                    return {
                        id: family,
                        name: family,
                        family: family,
                        title: details.title || details.name,
                        description: details.description,
                        version: latestVersion,
                        allVersions: familyData.versions,
                        latestStable: familyData.latestStable,
                        latest: familyData.latest,
                        author: details.author,
                        license: details.license,
                        elementSelector: details.elementSelector,
                        group: details.group,
                        keywords: details.keywords,
                        main: details.main,
                        verified: details.verified,
                        installed: details.installed,
                        hasReadme: details.hasReadme,
                        readmeContent: details.readmeContent
                    };
                } catch (error) {
                    console.warn(`Failed to load details for ${family}:`, error);
                    return {
                        id: family,
                        name: family,
                        family: family,
                        title: family,
                        description: 'Component description not available',
                        version: familyData.latest,
                        allVersions: familyData.versions,
                        latestStable: familyData.latestStable,
                        latest: familyData.latest,
                        verified: false,
                        installed: false
                    };
                }
            })
        );
        
        filteredPlugins = [...allPlugins];
        
        renderPlugins();
        setupPagination();
        showLoading(false);
    } catch (error) {
        console.error('Error loading plugins:', error);
        showError('Failed to load plugins. Please try again later.');
        showLoading(false);
    }
}

// Setup search functionality
function setupSearchFilter() {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query === '') {
            filteredPlugins = [...allPlugins];
        } else {
            filteredPlugins = allPlugins.filter(plugin => 
                plugin.name.toLowerCase().includes(query) ||
                plugin.description.toLowerCase().includes(query) ||
                plugin.title.toLowerCase().includes(query) ||
                (plugin.keywords && plugin.keywords.some(keyword => 
                    keyword.toLowerCase().includes(query)
                ))
            );
        }
        
        currentPage = 1;
        renderPlugins();
        setupPagination();
    });
}

// Render plugins grid
function renderPlugins() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pluginsToShow = filteredPlugins.slice(startIndex, endIndex);
    
    if (pluginsToShow.length === 0 && filteredPlugins.length === 0) {
        pluginGrid.innerHTML = `
            <div class="loading">
                <i class="fas fa-search"></i>
                <span>No plugins found matching your search.</span>
            </div>
        `;
        return;
    }      pluginGrid.innerHTML = pluginsToShow.map(plugin => `
        <div class="plugin-card" onclick="openPluginModal('${plugin.id}')">
            <div class="plugin-header">
                <div class="plugin-icon">
                    <i class="fas fa-puzzle-piece"></i>
                </div>
                <div class="plugin-info">
                    <h3>${escapeHtml(plugin.title || plugin.name)}</h3>
                    <p class="description">${escapeHtml(plugin.description)}</p>
                </div>
            </div>
            
            <div class="plugin-meta">
                <span class="version">${escapeHtml(plugin.version)}</span>
                ${plugin.verified ? `
                    <span class="verified">
                        <i class="fas fa-check-circle"></i>
                        Verified
                    </span>
                ` : ''}
                ${plugin.installed ? `
                    <span class="installed">
                        <i class="fas fa-check"></i>
                        Installed
                    </span>
                ` : ''}
            </div>
              <div class="actions">                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); copyPackagePath('${plugin.id}')">
                    <i class="fas fa-copy"></i>
                    Copy Code
                </button>
                <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openPluginModal('${plugin.id}')">
                    <i class="fas fa-info-circle"></i>
                    Learn more
                </button>
            </div>
        </div>
    `).join('');
}

// Setup pagination
function setupPagination() {
    const totalPages = Math.ceil(filteredPlugins.length / itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const paginationInfo = document.getElementById('paginationInfo');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    paginationInfo.textContent = `${currentPage} / ${totalPages}`;
}

// Change page
function changePage(direction) {
    const totalPages = Math.ceil(filteredPlugins.length / itemsPerPage);
    const newPage = currentPage + direction;
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderPlugins();
        setupPagination();
        
        // Scroll to top of grid
        pluginGrid.scrollIntoView({ behavior: 'smooth' });
    }
}

// Open plugin detail modal
async function openPluginModal(pluginId) {
    try {
        // Show modal with loading state
        pluginModal.style.display = 'flex';
        showTabContent('overview');
        
        // Find the plugin family data
        const pluginFamily = allPlugins.find(p => p.id === pluginId);
        if (!pluginFamily) {
            throw new Error('Plugin not found');
        }
        
        currentPlugin = pluginFamily;
        currentSelectedVersion = pluginFamily.version;
        
        // Load the current version details (already loaded in loadPlugins)
        await updateModalContent(pluginFamily.family, pluginFamily.version, pluginFamily);
        
        // Setup version selector
        setupVersionSelector(pluginFamily);
        
    } catch (error) {
        console.error('Error loading plugin details:', error);
        showError('Failed to load plugin details.');
        closeModal();
    }
}

// Update modal content with plugin details
async function updateModalContent(family, version, pluginData = null) {
    try {
        // If pluginData is not provided, fetch it
        if (!pluginData) {
            const response = await fetch(`${API_BASE}/marketplace/components/${family}/${version}`);
            pluginData = await response.json();
            
            // Cache the version data
            if (!allVersionData[family]) allVersionData[family] = {};
            allVersionData[family][version] = pluginData;
        }
        
        // Update modal content
        document.getElementById('modalTitle').textContent = pluginData.title || pluginData.name;
        document.getElementById('modalDescription').textContent = pluginData.description;
        document.getElementById('modalVersion').textContent = `v${version}`;
        document.getElementById('modalAuthor').textContent = pluginData.author || 'Unknown';
        
        // Show/hide verified badge
        const verifiedBadge = document.getElementById('modalVerified');
        verifiedBadge.style.display = pluginData.verified ? 'flex' : 'none';
        
        // Update install button
        const installBtn = document.getElementById('modalInstallBtn');
        installBtn.innerHTML = pluginData.installed ? 
            '<i class="fas fa-check"></i> Installed' : 
            '<i class="fas fa-download"></i> Copy install command';
        installBtn.disabled = pluginData.installed;
        
        // Update overview tab
        updateOverviewTab(pluginData);
        
        // Update details tab
        updateDetailsTab(pluginData);
        
        // Update README tab
        updateReadmeTab(pluginData);
        
        // Update current selected version
        currentSelectedVersion = version;
        
    } catch (error) {
        console.error('Error updating modal content:', error);
        showError('Failed to load version details.');
    }
}

// Setup version selector dropdown
function setupVersionSelector(pluginFamily) {
    const versionDropdown = document.getElementById('versionDropdown');
    const versionSelector = document.getElementById('versionSelector');
    
    // Clear existing options
    versionDropdown.innerHTML = '';
    
    // Add all versions as options
    if (pluginFamily.allVersions && pluginFamily.allVersions.length > 1) {
        pluginFamily.allVersions.forEach(version => {
            const option = document.createElement('option');
            option.value = version;
            option.textContent = `v${version}`;
            
            // Mark special versions
            if (version === pluginFamily.latest) {
                option.textContent += ' (Latest)';
            } else if (version === pluginFamily.latestStable && version !== pluginFamily.latest) {
                option.textContent += ' (Stable)';
            }
            
            // Select current version
            if (version === currentSelectedVersion) {
                option.selected = true;
            }
            
            versionDropdown.appendChild(option);
        });
        
        // Show version selector button if multiple versions exist
        document.getElementById('showVersionsBtn').style.display = 'inline-block';
    } else {
        // Hide version selector button if only one version
        document.getElementById('showVersionsBtn').style.display = 'none';
        versionSelector.style.display = 'none';
    }
}

// Toggle version selector visibility
function toggleVersionSelector() {
    const versionSelector = document.getElementById('versionSelector');
    const showVersionsBtn = document.getElementById('showVersionsBtn');
    
    if (versionSelector.style.display === 'none' || !versionSelector.style.display) {
        versionSelector.style.display = 'block';
        showVersionsBtn.innerHTML = '<i class="fas fa-code-branch"></i> Hide Versions';
    } else {
        versionSelector.style.display = 'none';
        showVersionsBtn.innerHTML = '<i class="fas fa-code-branch"></i> Show All Versions';
    }
}

// Switch to selected version
async function switchVersion() {
    const versionDropdown = document.getElementById('versionDropdown');
    const selectedVersion = versionDropdown.value;
    
    if (selectedVersion === currentSelectedVersion) return;
    
    try {
        // Show loading state
        const modalBody = document.querySelector('.modal-body');
        modalBody.style.opacity = '0.6';
        
        // Check if we have cached data for this version
        const family = currentPlugin.family;
        let versionData = null;
        
        if (allVersionData[family] && allVersionData[family][selectedVersion]) {
            versionData = allVersionData[family][selectedVersion];
        } else {
            // Fetch version data
            const response = await fetch(`${API_BASE}/marketplace/components/${family}/${selectedVersion}`);
            versionData = await response.json();
            
            // Cache the data
            if (!allVersionData[family]) allVersionData[family] = {};
            allVersionData[family][selectedVersion] = versionData;
        }
        
        // Update modal with new version data
        await updateModalContent(family, selectedVersion, versionData);
        
        // Restore modal body opacity
        modalBody.style.opacity = '1';
        
    } catch (error) {
        console.error('Error switching version:', error);
        showError('Failed to load version details.');
        
        // Reset dropdown to previous version
        const versionDropdown = document.getElementById('versionDropdown');
        versionDropdown.value = currentSelectedVersion;
        
        // Restore modal body opacity
        const modalBody = document.querySelector('.modal-body');
        modalBody.style.opacity = '1';
    }
}

// Update overview tab content
function updateOverviewTab(plugin) {
    // Features (derived from description and keywords)
    const featuresDiv = document.getElementById('pluginFeatures');
    const features = extractFeatures(plugin);
    featuresDiv.innerHTML = features.length > 0 ? 
        `<ul>${features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}</ul>` :
        '<p>No specific features listed.</p>';
    
    // Keywords
    const keywordsDiv = document.getElementById('pluginKeywords');
    if (plugin.keywords && plugin.keywords.length > 0) {
        keywordsDiv.innerHTML = plugin.keywords
            .map(keyword => `<span class="keyword">${escapeHtml(keyword)}</span>`)
            .join('');
    } else {
        keywordsDiv.innerHTML = '<p>No keywords available.</p>';
    }
    
    // Example code
    const exampleCode = document.getElementById('pluginExample');
    const example = generateExampleCode(plugin);
    exampleCode.textContent = example;
    
    // Apply syntax highlighting if Prism is available
    if (typeof Prism !== 'undefined') {
        Prism.highlightElement(exampleCode);
    }
}

// Update details tab content
function updateDetailsTab(plugin) {
    document.getElementById('detailPackageName').textContent = plugin.name;
    document.getElementById('detailVersion').textContent = plugin.version;
    document.getElementById('detailSelector').textContent = plugin.elementSelector || `<${plugin.name}>`;
    document.getElementById('detailGroup').textContent = plugin.group || 'Components';
    document.getElementById('detailLicense').textContent = plugin.license;
    document.getElementById('detailMainFile').textContent = plugin.main;
}

// Update README tab content
function updateReadmeTab(plugin) {
    const readmeContent = document.getElementById('readmeContent');
    
    if (plugin.readmeContent && plugin.readmeContent.trim()) {
        try {
            // Convert markdown to HTML using marked.js
            const htmlContent = marked.parse(plugin.readmeContent);
            readmeContent.innerHTML = htmlContent;
            
            // Apply syntax highlighting to code blocks
            if (typeof Prism !== 'undefined') {
                readmeContent.querySelectorAll('pre code').forEach(block => {
                    Prism.highlightElement(block);
                });
            }
        } catch (error) {
            console.error('Error parsing markdown:', error);
            readmeContent.innerHTML = `<pre>${escapeHtml(plugin.readmeContent)}</pre>`;
        }
    } else {
        readmeContent.innerHTML = `
            <div class="loading">
                <i class="fas fa-file-alt"></i>
                <span>No documentation available for this plugin.</span>
            </div>
        `;
    }
}

// Extract features from plugin description
function extractFeatures(plugin) {
    const features = [];
    
    // Add some generic features based on plugin type
    if (plugin.keywords) {
        if (plugin.keywords.includes('form')) {
            features.push('Form input component');
        }
        if (plugin.keywords.includes('web-component')) {
            features.push('Web Component based');
        }
        if (plugin.keywords.includes('lit')) {
            features.push('Built with Lit Element');
        }
    }
    
    // Add component-specific features based on name
    const name = plugin.name.toLowerCase();
    if (name.includes('input')) {
        features.push('Input validation');
        features.push('Event handling');
    }
    if (name.includes('dropdown')) {
        features.push('Searchable options');
        features.push('Multi-selection support');
    }
    if (name.includes('color')) {
        features.push('Color picker interface');
        features.push('Multiple color formats');
    }
    if (name.includes('date')) {
        features.push('Calendar interface');
        features.push('Date range selection');
    }
    if (name.includes('file')) {
        features.push('Drag and drop support');
        features.push('File preview');
    }
    
    return features;
}

// Generate example code for plugin
function generateExampleCode(plugin) {
    const selector = plugin.elementSelector || `zero-${plugin.id}`;
    
    // Generate basic usage example
    let example = `<!-- Basic usage -->\n<${selector}`;
    
    // Add common attributes based on plugin type
    const name = plugin.name.toLowerCase();
    if (name.includes('input') || name.includes('textarea')) {
        example += `\n  placeholder="Enter value here"`;
        example += `\n  value=""`;
    }
    if (name.includes('dropdown')) {
        example += `\n  options='[{"label": "Option 1", "value": "1"}]'`;
    }
    if (name.includes('checkbox')) {
        example += `\n  checked="false"`;
    }
    if (name.includes('slider') || name.includes('range')) {
        example += `\n  min="0"`;
        example += `\n  max="100"`;
        example += `\n  value="50"`;
    }
    
    example += `>\n</${selector}>`;
    
    // Add JavaScript example
    example += `\n\n// JavaScript usage\nconst element = document.querySelector('${selector}');\nelement.addEventListener('change', (event) => {\n  console.log('Value changed:', event.detail.value);\n});`;
    
    return example;
}

// Tab functionality
function showTab(tabName) {
    // Remove active class from all tabs and panes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    // Add active class to selected tab and pane
    event.target.classList.add('active');
    document.getElementById(tabName + 'Tab').classList.add('active');
}

// Show specific tab content
function showTabContent(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    document.getElementById(tabName + 'Tab').classList.add('active');
}

// Close modal
function closeModal() {
    pluginModal.style.display = 'none';
    currentPlugin = null;
}

// Copy install command
function copyInstallCommand(pluginId = null) {
    let plugin, version;
    
    if (pluginId) {
        // Called from plugin card - use default version
        plugin = allPlugins.find(p => p.id === pluginId);
        version = plugin?.version;
    } else {
        // Called from modal - use currently selected version
        plugin = currentPlugin;
        version = currentSelectedVersion || plugin?.version;
    }
    
    if (!plugin) return;
    
    const command = `npm install @zero-components/${plugin.family}@${version}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(command).then(() => {
        showNotification();
    }).catch(err => {
        console.error('Failed to copy command:', err);
        // Fallback: show command in alert
        alert(`Copy this command: ${command}`);
    });
}

// Copy package.js path
async function copyPackagePath(pluginId) {
    const plugin = allPlugins.find(p => p.id === pluginId);
    if (!plugin) return;

    try {        // Get the JavaScript file content from the API
const url = `${API_BASE}/marketplace/components/${plugin.family}/${plugin.version}/js`;
        
        // Create the script tag
        const scriptTag = `<script src="${url}" type="module"></script>`;

        // Copy to clipboard
        await navigator.clipboard.writeText(scriptTag);
        showNotification('Script tag copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy package path:', err);
        showError('Failed to get package path. Please try again.');
    }
}

// Show notification
function showNotification(message = 'Package path ready to be pasted!') {
    const notification = document.getElementById('notification');
    const notificationText = notification.querySelector('span');
    notificationText.textContent = message;
    notification.style.display = 'flex';
    setTimeout(() => {
        hideNotification();
    }, 3000);
}

// Hide notification
function hideNotification() {
    notification.style.display = 'none';
}

// Show/hide loading state
function showLoading(show) {
    loading.style.display = show ? 'flex' : 'none';
    if (!show) {
        pagination.style.display = filteredPlugins.length > itemsPerPage ? 'flex' : 'none';
    }
}

// Show error message
function showError(message) {
    pluginGrid.innerHTML = `
        <div class="loading">
            <i class="fas fa-exclamation-triangle"></i>
            <span>${escapeHtml(message)}</span>
        </div>
    `;
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === pluginModal) {
        closeModal();
    }
});

// Handle keyboard shortcuts
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && pluginModal.style.display === 'flex') {
        closeModal();
    }
    
    if (event.key === '/' && event.target !== searchInput) {
        event.preventDefault();
        searchInput.focus();
    }
});

// Make functions globally available for inline event handlers
window.openPluginModal = openPluginModal;
window.closeModal = closeModal;
window.copyInstallCommand = copyInstallCommand;
window.showTab = showTab;
window.changePage = changePage;
window.hideNotification = hideNotification;
window.toggleVersionSelector = toggleVersionSelector;
window.switchVersion = switchVersion;
