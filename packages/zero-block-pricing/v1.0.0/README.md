# Zero Block Pricing

A conversion-focused pricing tables block with configurable tier cards, highlighted features, and purchase buttons.

## Properties

- **Section Title (`title`)**: Core pricing block heading.
- **Section Subtitle (`lead`)**: Sub-heading copy.
- **Tiers JSON List (`pricingJson`)**: JSON array string of items:
  ```json
  [
    {
      "title": "Basic",
      "price": "$9",
      "period": "mo",
      "features": ["1 Workspace", "Basic Support"],
      "ctaText": "Buy Basic",
      "ctaUrl": "#",
      "featured": false
    },
    {
      "title": "Pro",
      "price": "$29",
      "period": "mo",
      "features": ["Unlimited Workspaces", "24/7 Priority Support"],
      "ctaText": "Upgrade to Pro",
      "ctaUrl": "#",
      "featured": true
    }
  ]
  ```
- **Layout Variant (`layout`)**:
  - `layout-1`: 3-Column Tier Grid (Standard comparison layout)
  - `layout-2`: Single Highlight Tier (Focused layout)
- **Theme Mode (`themeStyle`)**: `light` / `dark`
