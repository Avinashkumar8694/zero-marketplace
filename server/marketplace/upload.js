/**
 * Upload functionality for the marketplace
 */

class PluginUploader {
    constructor() {
        this.selectedFile = null;
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.fileUploadArea = document.getElementById('fileUploadArea');
        this.fileInput = document.getElementById('pluginFile');
        this.selectedFileDiv = document.getElementById('selectedFile');
        this.uploadForm = document.getElementById('uploadForm');
        this.uploadBtn = document.getElementById('uploadBtn');
        this.validateBtn = document.getElementById('validateBtn');
        this.uploadStatus = document.getElementById('uploadStatus');
        this.progressBar = document.querySelector('.progress-bar');
        this.progressFill = document.querySelector('.progress-fill');
    }

    bindEvents() {
        // File upload area events
        this.fileUploadArea.addEventListener('click', () => {
            this.fileInput.click();
        });

        this.fileUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.fileUploadArea.classList.add('dragover');
        });

        this.fileUploadArea.addEventListener('dragleave', () => {
            this.fileUploadArea.classList.remove('dragover');
        });

        this.fileUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            this.fileUploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileSelect(files[0]);
            }
        });

        // File input change
        this.fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.handleFileSelect(e.target.files[0]);
            }
        });

        // Remove file button
        document.getElementById('removeFile').addEventListener('click', () => {
            this.clearSelectedFile();
        });

        // Form submission
        this.uploadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.uploadPlugin();
        });

        // Validate button
        this.validateBtn.addEventListener('click', () => {
            this.validatePlugin();
        });
    }

    handleFileSelect(file) {
        // Validate file type
        if (!file.name.toLowerCase().endsWith('.zip')) {
            this.showStatus('error', 'Please select a ZIP file.');
            return;
        }

        // Validate file size (10MB limit)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            this.showStatus('error', 'File size must be less than 10MB.');
            return;
        }

        this.selectedFile = file;
        this.displaySelectedFile(file);
        this.uploadBtn.disabled = false;
        this.hideStatus();
    }

    displaySelectedFile(file) {
        const fileName = document.querySelector('.selected-file-name');
        const fileSize = document.querySelector('.selected-file-size');
        
        fileName.textContent = file.name;
        fileSize.textContent = this.formatFileSize(file.size);
        
        this.fileUploadArea.style.display = 'none';
        this.selectedFileDiv.style.display = 'flex';
    }

    clearSelectedFile() {
        this.selectedFile = null;
        this.fileInput.value = '';
        this.fileUploadArea.style.display = 'block';
        this.selectedFileDiv.style.display = 'none';
        this.uploadBtn.disabled = true;
        this.hideStatus();
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    showStatus(type, message) {
        this.uploadStatus.className = `upload-status ${type}`;
        this.uploadStatus.querySelector('.status-message').textContent = message;
        this.uploadStatus.style.display = 'block';
        
        if (type === 'loading') {
            this.progressBar.style.display = 'block';
        } else {
            this.progressBar.style.display = 'none';
        }
    }

    hideStatus() {
        this.uploadStatus.style.display = 'none';
        this.progressBar.style.display = 'none';
    }

    updateProgress(percent) {
        this.progressFill.style.width = `${percent}%`;
    }

    async validatePlugin() {
        if (!this.selectedFile) {
            this.showStatus('error', 'Please select a file first.');
            return;
        }

        this.showStatus('loading', 'Validating plugin...');

        try {
            const formData = new FormData();
            formData.append('plugin', this.selectedFile);

            const response = await fetch('/marketplace/validate', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.valid) {
                this.showStatus('success', 'Plugin validation successful! You can now upload.');
                if (result.warnings && result.warnings.length > 0) {
                    console.warn('Validation warnings:', result.warnings);
                }
            } else {
                this.showStatus('error', `Validation failed: ${result.error}`);
            }
        } catch (error) {
            console.error('Validation error:', error);
            this.showStatus('error', 'Failed to validate plugin. Please try again.');
        }
    }

    async uploadPlugin() {
        if (!this.selectedFile) {
            this.showStatus('error', 'Please select a file first.');
            return;
        }

        this.showStatus('loading', 'Uploading plugin...');
        this.uploadBtn.disabled = true;

        try {
            const formData = new FormData();
            formData.append('plugin', this.selectedFile);

            // Add metadata if provided
            const metadata = this.collectMetadata();
            if (Object.keys(metadata).length > 0) {
                formData.append('metadata', JSON.stringify(metadata));
            }

            // Create XMLHttpRequest for progress tracking
            const xhr = new XMLHttpRequest();
            
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const percent = (e.loaded / e.total) * 100;
                    this.updateProgress(percent);
                }
            });

            xhr.addEventListener('load', () => {
                if (xhr.status === 200) {
                    const result = JSON.parse(xhr.responseText);
                    if (result.success) {
                        this.showStatus('success', 'Plugin uploaded successfully! Redirecting...');
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 2000);
                    } else {
                        this.showStatus('error', result.error || 'Upload failed');
                        this.uploadBtn.disabled = false;
                    }
                } else {
                    this.showStatus('error', 'Upload failed. Please try again.');
                    this.uploadBtn.disabled = false;
                }
            });

            xhr.addEventListener('error', () => {
                this.showStatus('error', 'Upload failed. Please check your connection.');
                this.uploadBtn.disabled = false;
            });

            xhr.open('POST', '/marketplace/upload');
            xhr.send(formData);

        } catch (error) {
            console.error('Upload error:', error);
            this.showStatus('error', 'Upload failed. Please try again.');
            this.uploadBtn.disabled = false;
        }
    }

    collectMetadata() {
        const metadata = {};
        
        const name = document.getElementById('pluginName').value.trim();
        const version = document.getElementById('pluginVersion').value.trim();
        const description = document.getElementById('pluginDescription').value.trim();
        const author = document.getElementById('pluginAuthor').value.trim();
        const license = document.getElementById('pluginLicense').value;
        const keywords = document.getElementById('pluginKeywords').value.trim();

        if (name) metadata.name = name;
        if (version) metadata.version = version;
        if (description) metadata.description = description;
        if (author) metadata.author = author;
        if (license) metadata.license = license;
        if (keywords) metadata.keywords = keywords.split(',').map(k => k.trim()).filter(k => k);

        return metadata;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PluginUploader();
});
