# Zero Marketplace Workspace

This workspace contains the tools and packages for publishing and consuming Zero components and flows.

## Standards for Marketplace Contributions

To ensure your contributions are fully compatible with **Zero Studio's Automated Discovery**, follow these guidelines.

### 1. Discovery-Ready Flows
Plugins that include flows should ensure their **Start Nodes** are clearly labeled.

- **`entryRole`**: This should be a machine-readable ID for the action (e.g., `onLoginSuccess`).
- **`label`**: This should be a human-readable title (e.g., `Handle Authentication Success`).

The Studio will prioritize the `label` for its dropdowns, so making it clear and descriptive ensures that users of your plugin can easily find and wire your logic.

### 2. Multi-Action Components
If your component contains many different functions (e.g., a "User Management" flow with Login, Register, and Forgot Password), use one flow with **multiple Start Nodes**.

- Each start node acts as a distinct entry point.
- Avoid creating multiple small flows that clutter the automation panel.
- Grouping related logic into a single flow with named entry points is the preferred ecosystem pattern.

## Development and Publishing

### Local Registry Integration
When you build components in `zero-components`, they are automatically discovered by the Studio's local registry.

### Publishing to Marketplace
To prepare a package for the marketplace:
```bash
node publish-to-marketplace.js --package <package-name>
```

Refer to the `docs/` directory for full submission guidelines and contract definitions.
