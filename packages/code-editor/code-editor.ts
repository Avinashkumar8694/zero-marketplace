import { RendererComponent, RendererAttribute, applyGlobalStyles, UserInterfaceType, AttributeType } from 'zero-annotation';

import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * Represents a Monaco-like code editor component with syntax highlighting and advanced features.
 * 
 * @export
 * @class CodeEditor
 * @extends {LitElement}
 */
@RendererComponent({
    name: 'code-editor',
    version: '1.0.0',
    title: 'Code Editor',
    elementSelector: 'zero-code-editor',
    group: 'Editors',
    iconName: 'code-icon.png',
})
@applyGlobalStyles()
export class CodeEditor extends LitElement {

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 400px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            overflow: hidden;
            font-family: 'Courier New', monospace;
            background: #1e1e1e;
            position: relative;
        }

        .editor-container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .editor-header {
            background: #2d2d30;
            border-bottom: 1px solid #3e3e42;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #cccccc;
            font-size: 12px;
        }

        .editor-tabs {
            display: flex;
            gap: 1px;
        }

        .editor-tab {
            background: #2d2d30;
            border: none;
            color: #cccccc;
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 4px 4px 0 0;
            font-size: 12px;
            position: relative;
        }

        .editor-tab.active {
            background: #1e1e1e;
            color: #ffffff;
        }

        .editor-tab:hover {
            background: #3e3e42;
        }

        .editor-controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .language-selector {
            background: #3c3c3c;
            border: 1px solid #464647;
            color: #cccccc;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
        }

        .editor-main {
            display: flex;
            flex: 1;
            overflow: hidden;
        }        .line-numbers {
            background: #252526;
            color: #6e7681;
            padding: 12px 8px;
            font-size: 13px;
            line-height: 1.4;
            text-align: right;
            min-width: 50px;
            border-right: 1px solid #3e3e42;
            user-select: none;
            overflow: hidden;
            white-space: pre-line;
            font-family: 'Consolas', 'Courier New', monospace;
        }

        .editor-content {
            flex: 1;
            position: relative;
            overflow: auto;
        }

        .code-input {
            width: 100%;
            height: 100%;
            background: transparent;
            color: #d4d4d4;
            border: none;
            outline: none;
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 13px;
            line-height: 1.4;
            padding: 12px;
            resize: none;
            white-space: pre;
            overflow-wrap: normal;
            overflow-x: auto;
            tab-size: 4;
        }

        .code-highlight {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 13px;
            line-height: 1.4;
            padding: 12px;
            white-space: pre;
            overflow: hidden;
            color: transparent;
        }

        .keyword { color: #569cd6; }
        .string { color: #ce9178; }
        .comment { color: #6a9955; font-style: italic; }
        .number { color: #b5cea8; }
        .operator { color: #d4d4d4; }
        .function { color: #dcdcaa; }
        .variable { color: #9cdcfe; }
        .type { color: #4ec9b0; }

        .editor-footer {
            background: #007acc;
            color: white;
            padding: 4px 12px;
            font-size: 11px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .status-info {
            display: flex;
            gap: 16px;
        }

        .cursor-position {
            display: flex;
            gap: 8px;
        }

        .minimap {
            width: 100px;
            background: #252526;
            border-left: 1px solid #3e3e42;
            overflow: hidden;
            position: relative;
        }

        .minimap-content {
            font-size: 2px;
            line-height: 2px;
            color: #d4d4d4;
            padding: 2px;
            white-space: pre;
        }

        .search-box {
            position: absolute;
            top: 50px;
            right: 20px;
            background: #2d2d30;
            border: 1px solid #3e3e42;
            border-radius: 4px;
            padding: 8px;
            color: #cccccc;
            z-index: 10;
            display: none;
        }

        .search-box.visible {
            display: block;
        }

        .search-input {
            background: #3c3c3c;
            border: 1px solid #464647;
            color: #cccccc;
            padding: 4px 8px;
            border-radius: 2px;
            font-size: 11px;
            width: 200px;
        }

        .icon-button {
            background: none;
            border: none;
            color: #cccccc;
            cursor: pointer;
            padding: 4px;
            border-radius: 2px;
            font-size: 12px;
        }

        .icon-button:hover {
            background: #3e3e42;
        }

        .toolbar {
            display: flex;
            gap: 4px;
            align-items: center;
        }

        .theme-dark {
            background: #1e1e1e;
        }

        .theme-light {
            background: #ffffff;
        }

        .theme-light .editor-header {
            background: #f3f3f3;
            color: #333333;
            border-bottom-color: #e1e4e8;
        }

        .theme-light .code-input {
            color: #24292e;
        }        .theme-light .line-numbers {
            background: #fafbfc;
            color: #6a737d;
            border-right-color: #e1e4e8;
        }

        .line-numbers-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    `;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.TEXTAREA,
        displayLabel: 'Code Content',
        placeholderText: 'Enter your code here...',
        fieldMappings: 'code',
    })
    code = `function helloWorld() {
    console.log("Hello, World!");
    return "Welcome to the code editor!";
}

// This is a comment
const message = "Monaco-like editor";
let count = 0;

class CodeEditor {
    constructor() {
        this.initialized = true;
    }
    
    run() {
        helloWorld();
    }
}`;

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Language',
        optionItems: [
            { value: 'javascript', label: 'JavaScript' },
            { value: 'typescript', label: 'TypeScript' },
            { value: 'python', label: 'Python' },
            { value: 'java', label: 'Java' },
            { value: 'csharp', label: 'C#' },
            { value: 'html', label: 'HTML' },
            { value: 'css', label: 'CSS' },
            { value: 'json', label: 'JSON' }
        ],
        fieldMappings: 'language',
    })
    language = 'javascript';

    @property({ type: String })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.DROPDOWN,
        displayLabel: 'Theme',
        optionItems: [
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' }
        ],
        fieldMappings: 'theme',
    })
    theme = 'dark';

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Line Numbers',
        fieldMappings: 'showLineNumbers',
    })
    showLineNumbers = true;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Show Minimap',
        fieldMappings: 'showMinimap',
    })
    showMinimap = true;

    @property({ type: Boolean })
    @RendererAttribute({
        attributeType: AttributeType.PROPERTY,
        uiComponentType: UserInterfaceType.CHECKBOX,
        displayLabel: 'Word Wrap',
        fieldMappings: 'wordWrap',
    })
    wordWrap = false;

    @property({ type: Number })
    private cursorLine = 1;

    @property({ type: Number })
    private cursorColumn = 1;

    @property({ type: Boolean })
    private searchVisible = false;

    @property({ type: String })
    private searchTerm = '';    @RendererAttribute({
        attributeType: AttributeType.EVENT,
        displayLabel: 'On Code Changed',
        eventTrigger: 'code-changed',
    })
    onCodeChanged() {
        // This method emits the change event when code content is modified
        this.fireChangeEvent();
    }

    firstUpdated() {
        this.updateLineNumbers();
        this.setupKeyboardShortcuts();
    }    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('code')) {
            this.updateLineNumbers();
            this.updateCursorPosition();
        }
        if (changedProperties.has('showLineNumbers')) {
            this.updateLineNumbers();
        }
    }private updateLineNumbers() {
        const lines = this.code.split('\n');
        const lineNumbersEl = this.shadowRoot?.querySelector('.line-numbers') as HTMLElement;
        if (lineNumbersEl && this.showLineNumbers) {
            // Create line numbers that align with each line of code
            const lineNumbers = lines.map((_, index) => `${index + 1}`);
            lineNumbersEl.textContent = lineNumbers.join('\n');
        }
    }

    private updateCursorPosition() {
        const textarea = this.shadowRoot?.querySelector('.code-input') as HTMLTextAreaElement;
        if (textarea) {
            const cursorPos = textarea.selectionStart;
            const textBeforeCursor = this.code.substring(0, cursorPos);
            const lines = textBeforeCursor.split('\n');
            this.cursorLine = lines.length;
            this.cursorColumn = lines[lines.length - 1].length + 1;
        }
    }

    private setupKeyboardShortcuts() {
        const textarea = this.shadowRoot?.querySelector('.code-input') as HTMLTextAreaElement;
        if (textarea) {
            textarea.addEventListener('keydown', (e) => {
                // Ctrl+F for search
                if (e.ctrlKey && e.key === 'f') {
                    e.preventDefault();
                    this.toggleSearch();
                }
                
                // Tab indentation
                if (e.key === 'Tab') {
                    e.preventDefault();
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    
                    if (e.shiftKey) {
                        // Shift+Tab: unindent
                        this.unindentSelection(textarea, start, end);
                    } else {
                        // Tab: indent
                        this.indentSelection(textarea, start, end);
                    }
                }

                // Auto-closing brackets
                if (['(', '[', '{', '"', "'"].includes(e.key)) {
                    this.handleAutoClosing(e, textarea);
                }            });            
            textarea.addEventListener('input', (e) => {
                this.handleCodeInput(e);
                this.requestUpdate(); // Trigger re-render to update line numbers
            });

            textarea.addEventListener('click', () => {
                this.updateCursorPosition();
            });

            textarea.addEventListener('scroll', () => {
                // Sync line numbers scroll with textarea scroll
                const lineNumbersEl = this.shadowRoot?.querySelector('.line-numbers') as HTMLElement;
                if (lineNumbersEl) {
                    lineNumbersEl.scrollTop = textarea.scrollTop;
                }
            });
        }
    }

    private indentSelection(textarea: HTMLTextAreaElement, start: number, end: number) {
        const value = textarea.value;
        const selectedText = value.substring(start, end);
        
        if (selectedText.includes('\n')) {
            // Multi-line selection: indent each line
            const lines = selectedText.split('\n');
            const indentedText = lines.map(line => '    ' + line).join('\n');
            textarea.value = value.substring(0, start) + indentedText + value.substring(end);
            textarea.selectionStart = start;
            textarea.selectionEnd = start + indentedText.length;
        } else {
            // Single line: insert tab
            textarea.value = value.substring(0, start) + '    ' + value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 4;
        }
        
        this.code = textarea.value;
    }

    private unindentSelection(textarea: HTMLTextAreaElement, start: number, end: number) {
        const value = textarea.value;
        const beforeSelection = value.substring(0, start);
        const selectedText = value.substring(start, end);
        const afterSelection = value.substring(end);
        
        const lines = selectedText.split('\n');
        const unindentedLines = lines.map(line => {
            if (line.startsWith('    ')) {
                return line.substring(4);
            } else if (line.startsWith('\t')) {
                return line.substring(1);
            }
            return line;
        });
        
        const unindentedText = unindentedLines.join('\n');
        textarea.value = beforeSelection + unindentedText + afterSelection;
        textarea.selectionStart = start;
        textarea.selectionEnd = start + unindentedText.length;
        
        this.code = textarea.value;
    }

    private handleAutoClosing(e: KeyboardEvent, textarea: HTMLTextAreaElement) {
        const pairs: { [key: string]: string } = {
            '(': ')',
            '[': ']',
            '{': '}',
            '"': '"',
            "'": "'"
        };

        const closingChar = pairs[e.key];
        if (closingChar) {
            e.preventDefault();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            
            textarea.value = value.substring(0, start) + e.key + closingChar + value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
            this.code = textarea.value;
        }
    }

    private toggleSearch() {
        this.searchVisible = !this.searchVisible;
        if (this.searchVisible) {
            setTimeout(() => {
                const searchInput = this.shadowRoot?.querySelector('.search-input') as HTMLInputElement;
                searchInput?.focus();
            }, 0);
        }
    }

    private highlightSyntax(code: string): string {
        if (!code) return '';

        let highlighted = code;
        
        // JavaScript/TypeScript syntax highlighting
        if (this.language === 'javascript' || this.language === 'typescript') {
            // Keywords
            highlighted = highlighted.replace(
                /\b(function|const|let|var|if|else|for|while|return|class|constructor|import|export|from|default|async|await|try|catch|finally|throw|new|this|super|extends|implements|interface|type|enum|namespace|public|private|protected|static|readonly|abstract)\b/g,
                '<span class="keyword">$1</span>'
            );
            
            // Strings
            highlighted = highlighted.replace(
                /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
                '<span class="string">$1$2$1</span>'
            );
            
            // Comments
            highlighted = highlighted.replace(
                /\/\/.*$/gm,
                '<span class="comment">$&</span>'
            );
            
            highlighted = highlighted.replace(
                /\/\*[\s\S]*?\*\//g,
                '<span class="comment">$&</span>'
            );
            
            // Numbers
            highlighted = highlighted.replace(
                /\b\d+\.?\d*\b/g,
                '<span class="number">$&</span>'
            );
            
            // Functions
            highlighted = highlighted.replace(
                /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
                '<span class="function">$1</span>'
            );
        }
        
        return highlighted;
    }    private handleCodeInput(e: Event) {
        const target = e.target as HTMLTextAreaElement;
        this.code = target.value;
        this.updateCursorPosition();
        this.onCodeChanged(); // Use the onCodeChanged method to emit the change event
    }

    private fireChangeEvent() {
        // Fire a custom change event whenever the code content is modified
        this.dispatchEvent(new CustomEvent('code-changed', {
            detail: { 
                code: this.code,
                language: this.language 
            },
            bubbles: true,
            composed: true
        }));
    }

    private handleLanguageChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        this.language = target.value;
    }

    private handleThemeChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        this.theme = target.value;
    }

    private handleSearch(e: Event) {
        const target = e.target as HTMLInputElement;
        this.searchTerm = target.value;
        // Implement search functionality here
    }

    render() {
        return html`
            <div class="editor-container theme-${this.theme}">
                <div class="editor-header">
                    <div class="editor-tabs">
                        <button class="editor-tab active">
                            ${this.language === 'javascript' ? 'script.js' : 
                              this.language === 'typescript' ? 'script.ts' :
                              this.language === 'python' ? 'script.py' :
                              this.language === 'html' ? 'index.html' :
                              this.language === 'css' ? 'styles.css' :
                              'file.' + this.language}
                        </button>
                    </div>
                    <div class="editor-controls">
                        <div class="toolbar">
                            <button class="icon-button" @click="${this.toggleSearch}" title="Search (Ctrl+F)">🔍</button>
                            <select class="language-selector" .value="${this.language}" @change="${this.handleLanguageChange}">
                                <option value="javascript">JavaScript</option>
                                <option value="typescript">TypeScript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="csharp">C#</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="json">JSON</option>
                            </select>
                            <select class="language-selector" .value="${this.theme}" @change="${this.handleThemeChange}">
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="search-box ${this.searchVisible ? 'visible' : ''}">
                    <input 
                        type="text" 
                        class="search-input" 
                        placeholder="Find..."
                        .value="${this.searchTerm}"
                        @input="${this.handleSearch}"
                    />
                </div>

                <div class="editor-main">
                    ${this.showLineNumbers ? html`
                        <div class="line-numbers"></div>
                    ` : ''}
                    
                    <div class="editor-content">
                        <textarea
                            class="code-input"
                            .value="${this.code}"
                            @input="${this.handleCodeInput}"
                            placeholder="Start typing your code..."
                            spellcheck="false"
                            style="${this.wordWrap ? 'white-space: pre-wrap;' : ''}"
                        ></textarea>
                    </div>

                    ${this.showMinimap ? html`
                        <div class="minimap">
                            <div class="minimap-content">${this.code}</div>
                        </div>
                    ` : ''}
                </div>

                <div class="editor-footer">
                    <div class="status-info">
                        <span>Ln ${this.cursorLine}, Col ${this.cursorColumn}</span>
                        <span>${this.language.toUpperCase()}</span>
                        <span>UTF-8</span>
                    </div>
                    <div class="cursor-position">
                        <span>Lines: ${this.code.split('\n').length}</span>
                        <span>Characters: ${this.code.length}</span>
                    </div>
                </div>
            </div>
        `;
    }
}
