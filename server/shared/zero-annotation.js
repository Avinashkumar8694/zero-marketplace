// index.ts
import "reflect-metadata";

// src/load-css.ts
function LoadCSS(url) {
  if (!url || typeof url !== "string") {
    throw new Error("Invalid URL for LoadCSS decorator");
  }
  return function(target) {
    const originalConnectedCallback = target.prototype.connectedCallback;
    target.prototype.connectedCallback = function() {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      if (this.shadowRoot) {
        this.shadowRoot.appendChild(link);
      } else {
        document.head.appendChild(link);
      }
      if (originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    };
  };
}

// src/load-js.ts
function LoadJS(url) {
  if (!url || typeof url !== "string") {
    throw new Error("Invalid URL for LoadJS decorator");
  }
  return function(target) {
    const connectedCallback = target.prototype.connectedCallback;
    target.prototype.connectedCallback = function() {
      const script = document.createElement("script");
      script.src = url;
      script.defer = true;
      this.shadowRoot?.appendChild(script);
      if (connectedCallback) {
        connectedCallback.call(this);
      }
    };
  };
}

// src/renderer-component.ts
import "reflect-metadata";
function isValidComponentConfig(config) {
  return typeof config.name === "string" && typeof config.version === "string" && typeof config.title === "string" && typeof config.elementSelector === "string" && typeof config.group === "string" && typeof config.iconName === "string";
}
function RendererComponentDecorator(config) {
  return function(constructor) {
    if (isValidComponentConfig(config)) {
      const metadata = {
        version: config.version,
        name: config.name,
        title: config.title,
        selector: config.elementSelector,
        category: config.group,
        icon: config.iconName
      };
      Reflect.defineMetadata("ZeroComponent", metadata, constructor.prototype);
      if (globalThis.customElements) {
        customElements.define(
          `${config.elementSelector}-${config.version}`,
          constructor
        );
      } else {
        console.warn(
          "The customElements API is not supported in this environment. Custom element registration skipped."
        );
      }
      window.dispatchEvent(
        new CustomEvent("zero-element:component-load", {
          detail: {
            element: this
          }
        })
      );
    } else {
      throw new Error("Invalid configuration provided to RendererComponent decorator");
    }
  };
}
function RendererComponent(options) {
  return RendererComponentDecorator(options);
}

// src/rendered-style.ts
function applyGlobalStyles(options) {
  return function(BaseClass) {
    class StyledElement extends BaseClass {
      _stylesApplied = false;
      connectedCallback() {
        super.connectedCallback();
        if (!this._stylesApplied) {
          this._injectGlobalStyles();
          this._stylesApplied = true;
        }
        window.dispatchEvent(
          new CustomEvent("element-connected", {
            detail: { element: this }
          })
        );
      }
      update(properties) {
        try {
          super.update(properties);
        } catch (e) {
        }
      }
      _injectGlobalStyles() {
        const styleElement = document.querySelector('style.global-style[type="text/css"]');
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]');
        const supportsAdoptedStyleSheets = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (styleElement && supportsAdoptedStyleSheets) {
          const styleSheet = new CSSStyleSheet();
          const rules = styleElement.sheet?.cssRules;
          if (rules) {
            Array.from(rules).forEach((rule) => styleSheet.insertRule(rule.cssText));
            this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, styleSheet];
          }
        } else if (styleElement) {
          const clone = styleElement.cloneNode(true);
          this.shadowRoot.appendChild(clone);
        }
        cssLinks.forEach((link) => {
          const clonedLink = link.cloneNode(true);
          this.shadowRoot.appendChild(clonedLink);
        });
      }
    }
    return StyledElement;
  };
}

// src/renderer-attributes.ts
function validateRendererAttributeConfiguration(options) {
  const category = options?.categoryLabel?.trim();
  if (category === "") {
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  }
  return true;
}
function applyRendererAttribute(options) {
  return function(target, propertyKey) {
    try {
      if (!validateRendererAttributeConfiguration(options))
        return;
      const existingAttributes = Reflect.getMetadata("ZeroAttribute", target) || [];
      if (typeof propertyKey === "string" && typeof target[propertyKey] !== "function") {
        options.fieldMappings = options.fieldMappings ?? propertyKey;
      }
      existingAttributes.push(options);
      Reflect.defineMetadata("ZeroAttribute", existingAttributes, target);
    } catch (e) {
      console.log(e);
    }
  };
}
function RendererAttribute(options) {
  return applyRendererAttribute(options);
}

// src/base-theme.ts
import { css, unsafeCSS } from "lit";
function createThemeStyles(tokens) {
  const serialized = Object.entries(tokens).map(([key, value]) => `${key}: ${value};`).join("\n");
  return unsafeCSS(serialized);
}
var BaseTheme = class {
  id;
  name;
  globalTokens;
  componentTokens;
  baseStyles;
  constructor(id, name, tokens) {
    this.id = id;
    this.name = name;
    this.globalTokens = tokens;
    this.componentTokens = {};
    this.baseStyles = css``;
  }
  getGlobalStyles() {
    return css`
            :host {
                ${createThemeStyles(this.globalTokens)}
                --uiv-status-primary: var(--uiv-primary-color, var(--uiv-color-primary, #3b82f6));
                --uiv-status-secondary: var(--uiv-secondary-color, var(--uiv-color-secondary, #64748b));
                --uiv-status-success: var(--uiv-color-success, #16a34a);
                --uiv-status-warning: var(--uiv-color-warning, #f59e0b);
                --uiv-status-danger: var(--uiv-color-danger, #dc2626);
                --uiv-status-info: var(--uiv-color-info, #0ea5e9);
            }

            /* Semantic Utility Classes */
            .uiv-text-primary { color: var(--uiv-status-primary) !important; }
            .uiv-text-secondary { color: var(--uiv-status-secondary) !important; }
            .uiv-text-success { color: var(--uiv-status-success) !important; }
            .uiv-text-warning { color: var(--uiv-status-warning) !important; }
            .uiv-text-danger { color: var(--uiv-status-danger) !important; }
            .uiv-text-info { color: var(--uiv-status-info) !important; }
            
            .uiv-bg-primary { background: var(--uiv-status-primary) !important; color: #ffffff !important; }
            .uiv-bg-secondary { background: var(--uiv-status-secondary) !important; color: #ffffff !important; }
            .uiv-bg-success { background: var(--uiv-status-success) !important; color: #ffffff !important; }
            .uiv-bg-warning { background: var(--uiv-status-warning) !important; color: #ffffff !important; }
            .uiv-bg-danger { background: var(--uiv-status-danger) !important; color: #ffffff !important; }
            .uiv-bg-info { background: var(--uiv-status-info) !important; color: #ffffff !important; }

            ${this.baseStyles}
            ${this.getBaseStyles()}
        `;
  }
  getComponentStyles(componentName) {
    const tokens = this.getComponentTokens(componentName);
    return css`
            :host {
                ${createThemeStyles(tokens)}
            }
        `;
  }
  getComponentTokens(componentName) {
    return this.componentTokens[componentName] || {};
  }
  getCoreComponentStyles() {
    return css`
            .uiv-input, .uiv-select, .uiv-textarea {
                background-color: var(--uiv-input-bg, var(--uiv-app-input-bg, #ffffff));
                color: var(--uiv-text-primary, var(--uiv-app-text-color, #1a1a1a));
                border: 1px solid var(--uiv-input-border, var(--uiv-app-border-color, #cbd5e1));
                border-radius: var(--uiv-border-radius, 8px);
                padding: 10px 14px;
                font-family: inherit;
                font-size: 14px;
                width: 100%;
                box-sizing: border-box;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: block;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            }

            .uiv-input:hover, .uiv-select:hover, .uiv-textarea:hover {
                border-color: var(--uiv-color-primary, #3b82f6);
            }

            .uiv-input[type="checkbox"], .uiv-input[type="radio"] {
                width: auto;
                cursor: pointer;
                display: inline-block;
                box-shadow: none;
            }

            .uiv-input:focus, .uiv-select:focus, .uiv-textarea:focus {
                outline: none;
                border-color: var(--uiv-color-primary, #3b82f6);
                box-shadow: 0 0 0 3px var(--uiv-app-accent-transparent, rgba(59, 130, 246, 0.2));
            }

            .uiv-button {
                background-color: var(--uiv-btn-bg, var(--uiv-color-primary, #3b82f6));
                color: var(--uiv-btn-text, var(--uiv-text-inverse, #ffffff));
                border: none;
                border-radius: var(--uiv-border-radius, 8px);
                padding: 12px 24px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }

            .uiv-button:hover {
                filter: brightness(1.1);
                transform: translateY(-1px);
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }

            .uiv-button:active {
                transform: translateY(0);
                filter: brightness(0.95);
            }

            .uiv-label {
                color: inherit;
                font-weight: 600;
                margin-bottom: 8px;
                font-size: 0.85rem;
                letter-spacing: 0.025em;
                text-transform: uppercase;
                display: block;
                opacity: 0.8;
            }
        `;
  }
};

// src/renderer-interface.ts
var UserInterfaceType = /* @__PURE__ */ ((UserInterfaceType2) => {
  UserInterfaceType2["TEXT_INPUT"] = "text-input";
  UserInterfaceType2["PASSWORD_INPUT"] = "password-input";
  UserInterfaceType2["DROPDOWN"] = "dropdown";
  UserInterfaceType2["CHECKBOX"] = "checkbox";
  UserInterfaceType2["RADIO_BUTTON"] = "radio-button";
  UserInterfaceType2["RANGE_SLIDER"] = "range-slider";
  UserInterfaceType2["FILE_INPUT"] = "file-input";
  UserInterfaceType2["DATE_PICKER"] = "date-picker";
  UserInterfaceType2["COLOR_PICKER"] = "color-picker";
  UserInterfaceType2["NUMBER_INPUT"] = "number-input";
  UserInterfaceType2["TEXTAREA"] = "textarea";
  UserInterfaceType2["MULTI_SELECT"] = "multi-select";
  UserInterfaceType2["POPUP_DROPDOWN"] = "popup-dropdown";
  return UserInterfaceType2;
})(UserInterfaceType || {});
var AttributeType = /* @__PURE__ */ ((AttributeType2) => {
  AttributeType2["PROPERTY"] = "property";
  AttributeType2["EVENT"] = "event";
  AttributeType2["ACTION"] = "action";
  return AttributeType2;
})(AttributeType || {});
export {
  AttributeType,
  BaseTheme,
  LoadCSS,
  LoadJS,
  RendererAttribute,
  RendererComponent,
  UserInterfaceType,
  applyGlobalStyles,
  createThemeStyles
};
