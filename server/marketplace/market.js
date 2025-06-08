/**
 * Market UI components
 */

class MarketUI {
    constructor() {
        this.initializeComponents();
        this.loadPlugins();
    }

    initializeComponents() {
        this.searchInput = document.getElementById('searchInput');
        this.pluginGrid = document.querySelector('.plugin-grid');
        
        if (this.searchInput) {
            this.searchInput.addEventListener('input', this.handleSearch.bind(this));
        }
    }

    async loadPlugins() {
        try {
            const response = await fetch('/marketplace/plugins');
            const data = await response.json();
            
            if (data.plugins) {
                this.renderPlugins(data.plugins);
            }
        } catch (error) {
            console.error('Failed to load plugins:', error);
            // Show error message to user
            this.showError('Failed to load plugins. Please try again later.');
        }
    }

    renderPlugins(plugins) {
        if (!this.pluginGrid) return;

        this.pluginGrid.innerHTML = plugins.map(plugin => this.createPluginCard(plugin)).join('');
        
        // Add click handlers for install buttons
        document.querySelectorAll('.install-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const pluginId = e.target.dataset.pluginId;
                this.handleInstall(pluginId);
            });
        });

        // Add click handlers for plugin cards
        document.querySelectorAll('.plugin-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('install-button')) {
                    const pluginId = card.dataset.pluginId;
                    this.showPluginDetails(pluginId);
                }
            });
        });
    }

    createPluginCard(plugin) {
        return `
            <div class="plugin-card" data-plugin-id="${plugin.id}">
                <div class="plugin-header">
                    <h3>${plugin.title || plugin.name}</h3>
                    ${plugin.verified ? '<span class="verified-badge" title="Verified plugin">✓</span>' : ''}
                </div>
                <p class="plugin-description">${plugin.description}</p>
                <div class="plugin-meta">
                    <span class="plugin-version">v${plugin.version}</span>
                    <span class="plugin-author">${plugin.author}</span>
                </div>
                <div class="plugin-footer">
                    <div class="plugin-tags">
                        ${(plugin.keywords || []).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="install-button" data-plugin-id="${plugin.id}">
                        <i class="fas fa-download"></i>
                        Install
                    </button>
                </div>
            </div>
        `;
    }

    async handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        try {
            const response = await fetch('/marketplace/plugins');
            const data = await response.json();
            
            if (data.plugins) {
                const filteredPlugins = data.plugins.filter(plugin => 
                    plugin.name.toLowerCase().includes(searchTerm) ||
                    plugin.description.toLowerCase().includes(searchTerm) ||
                    (plugin.keywords || []).some(tag => tag.toLowerCase().includes(searchTerm))
                );
                
                this.renderPlugins(filteredPlugins);
            }
        } catch (error) {
            console.error('Search failed:', error);
        }
    }

    async showPluginDetails(pluginId) {
        try {
            const response = await fetch(`/marketplace/plugins/${pluginId}`);
            const plugin = await response.json();
            
            if (plugin) {
                this.renderPluginModal(plugin);
            }
        } catch (error) {
            console.error('Failed to load plugin details:', error);
        }
    }

    renderPluginModal(plugin) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${plugin.title || plugin.name}</h2>
                    <button class="close-button">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="plugin-details">
                        <p class="plugin-description">${plugin.description}</p>
                        <div class="plugin-meta">
                            <span class="plugin-version">Version: ${plugin.version}</span>
                            <span class="plugin-author">Author: ${plugin.author}</span>
                            <span class="plugin-license">License: ${plugin.license}</span>
                        </div>
                        ${plugin.hasReadme ? `
                            <div class="readme-content">
                                <h3>Documentation</h3>
                                <div class="markdown-content">${marked(plugin.readmeContent)}</div>
                            </div>
                        ` : ''}
                        <div class="installation">
                            <h3>Installation</h3>
                            <pre><code>npm install ${plugin.name}@${plugin.version}</code></pre>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary close-modal">Close</button>
                    <button class="btn btn-primary install-button" data-plugin-id="${plugin.id}">
                        <i class="fas fa-download"></i>
                        Install Plugin
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.close-button').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.querySelector('.install-button').addEventListener('click', () => {
            this.handleInstall(plugin.id);
        });
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Apply syntax highlighting
        if (window.Prism) {
            Prism.highlightAll();
        }
    }

    async handleInstall(pluginId) {
        try {
            // Show loading state
            const button = document.querySelector(`.install-button[data-plugin-id="${pluginId}"]`);
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Installing...';
            button.disabled = true;

            // Simulate installation (replace with actual installation logic)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success state
            button.innerHTML = '<i class="fas fa-check"></i> Installed';
            button.classList.add('installed');

            // Show notification
            this.showNotification('success', 'Plugin installed successfully!');

            // Reset after delay
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.classList.remove('installed');
            }, 3000);

        } catch (error) {
            console.error('Installation failed:', error);
            this.showNotification('error', 'Failed to install plugin. Please try again.');
        }
    }

    showNotification(type, message) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}-circle"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notification);

        // Add close button handler
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.remove();
        });

        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    showError(message) {
        this.showNotification('error', message);
    }
}

// Initialize the UI when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    window.marketUI = new MarketUI();
});
