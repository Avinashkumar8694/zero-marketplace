# Zero Block Footer

A responsive bottom footer navigation block containing directory links, branding, copyrights, and social icons.

## Properties

- **Brand Logo Text (`logo`)**: Text brand name display.
- **Copyright Copy (`copyright`)**: Text copyright declaration.
- **Footer Columns (`columnsJson`)**: JSON string configuration for multi-column footer links:
  ```json
  [
    {
      "title": "Solutions",
      "links": [{"label": "Analytics", "href": "#"}, {"label": "Cloud", "href": "#"}]
    }
  ]
  ```
- **Layout Display (`layout`)**:
  - `layout-1`: Multi-Column Link Directory (Logo left, multiple nav lists)
  - `layout-2`: Minimalist Inline (Copyright on the left, social link buttons on the right)
- **Theme Mode (`themeStyle`)**: `light` / `dark`
