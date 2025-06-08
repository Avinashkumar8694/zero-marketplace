// API base URL
const API_BASE = 'http://localhost:9000';

// Global state
let allPlugins = [];
let filteredPlugins = [];
let currentPage = 1;
let itemsPerPage = 10;
let currentPlugin = null;

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

// Load all plugins from API
async function loadPlugins() {
    try {
        showLoading(true);
        const response = await fetch(`${API_BASE}/marketplace/plugins`);
        const data = await response.json();
        
        allPlugins = data.plugins || [];
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
            
            <div class="actions">
                <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); copyInstallCommand('${plugin.id}')">
                    <i class="fas fa-download"></i>
                    Install
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
        
        // Load plugin details
        const response = await fetch(`${API_BASE}/marketplace/plugins/${pluginId}`);
        const plugin = await response.json();
        
        currentPlugin = plugin;
        
        // Update modal content
        document.getElementById('modalTitle').textContent = plugin.title || plugin.name;
        document.getElementById('modalDescription').textContent = plugin.description;
        document.getElementById('modalVersion').textContent = `v${plugin.version}`;
        document.getElementById('modalAuthor').textContent = plugin.author;
        
        // Show/hide verified badge
        const verifiedBadge = document.getElementById('modalVerified');
        verifiedBadge.style.display = plugin.verified ? 'flex' : 'none';
        
        // Update install button
        const installBtn = document.getElementById('modalInstallBtn');
        installBtn.innerHTML = plugin.installed ? 
            '<i class="fas fa-check"></i> Installed' : 
            '<i class="fas fa-download"></i> Copy install command';
        installBtn.disabled = plugin.installed;
        
        // Update overview tab
        updateOverviewTab(plugin);
        
        // Update details tab
        updateDetailsTab(plugin);
        
        // Load README content
        updateReadmeTab(plugin);
        
    } catch (error) {
        console.error('Error loading plugin details:', error);
        showError('Failed to load plugin details.');
        closeModal();
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
    const plugin = pluginId ? allPlugins.find(p => p.id === pluginId) : currentPlugin;
    if (!plugin) return;
    
    const command = `npm install @zero-components/${plugin.name}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(command).then(() => {
        showNotification();
    }).catch(err => {
        console.error('Failed to copy command:', err);
        // Fallback: show command in alert
        alert(`Copy this command: ${command}`);
    });
}

// Show notification
function showNotification() {
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
