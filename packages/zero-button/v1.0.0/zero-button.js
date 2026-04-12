var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// packages/zero-button/zero-button.ts
import { RendererAttribute, RendererComponent, applyGlobalStyles, AttributeType, UserInterfaceType } from "zero-annotation";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
var ZeroButton = class extends LitElement {
  constructor() {
    super(...arguments);
    this.label = "Button";
    this.variant = "primary";
    this.disabled = false;
    this.fullWidth = false;
  }
  get labelConfig() {
    return this.label;
  }
  set labelConfig(value) {
    this.label = value;
  }
  get variantConfig() {
    return this.variant;
  }
  set variantConfig(value) {
    this.variant = value || "primary";
  }
  get disabledConfig() {
    return this.disabled;
  }
  set disabledConfig(value) {
    this.disabled = Boolean(value);
  }
  handleClick() {
    this.dispatchEvent(new CustomEvent("click", { bubbles: true, composed: true }));
  }
  render() {
    const safeVariant = ["primary", "secondary", "ghost"].includes(this.variant) ? this.variant : "primary";
    return html`
      <button
        class=${`${safeVariant} ${this.fullWidth ? "full" : ""}`}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }
};
ZeroButton.styles = css`
    :host {
      display: inline-block;
    }

    button {
      border: none;
      border-radius: 999px;
      padding: 12px 18px;
      font: inherit;
      cursor: pointer;
      transition: transform 140ms ease, opacity 140ms ease, background 140ms ease;
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none;
    }

    .primary {
      background: #16324f;
      color: #f8fafc;
    }

    .secondary {
      background: #f5efe6;
      color: #132238;
      border: 1px solid rgba(19, 34, 56, 0.12);
    }

    .ghost {
      background: transparent;
      color: #16324f;
      border: 1px dashed rgba(22, 50, 79, 0.28);
    }

    .full {
      width: 100%;
    }
  `;
__decorateClass([
  property({ type: String })
], ZeroButton.prototype, "label", 2);
__decorateClass([
  property({ type: String })
], ZeroButton.prototype, "variant", 2);
__decorateClass([
  property({ type: Boolean })
], ZeroButton.prototype, "disabled", 2);
__decorateClass([
  property({ type: Boolean, attribute: "full-width" })
], ZeroButton.prototype, "fullWidth", 2);
__decorateClass([
  RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.TEXT_INPUT,
    displayLabel: "Label",
    fieldMappings: "label"
  })
], ZeroButton.prototype, "labelConfig", 1);
__decorateClass([
  RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.DROPDOWN,
    displayLabel: "Variant",
    fieldMappings: "variant",
    optionItems: [
      { label: "Primary", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Ghost", value: "ghost" }
    ]
  })
], ZeroButton.prototype, "variantConfig", 1);
__decorateClass([
  RendererAttribute({
    attributeType: AttributeType.PROPERTY,
    uiComponentType: UserInterfaceType.CHECKBOX,
    displayLabel: "Disabled",
    fieldMappings: "disabled"
  })
], ZeroButton.prototype, "disabledConfig", 1);
__decorateClass([
  RendererAttribute({
    attributeType: AttributeType.EVENT,
    displayLabel: "On Click",
    eventTrigger: "click"
  })
], ZeroButton.prototype, "handleClick", 1);
ZeroButton = __decorateClass([
  RendererComponent({
    name: "zero-button",
    version: "1.0.0",
    title: "Button",
    elementSelector: "zero-button",
    group: "Actions",
    iconName: "button-icon.png"
  }),
  applyGlobalStyles()
], ZeroButton);
export {
  ZeroButton
};
