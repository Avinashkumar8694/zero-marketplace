# Zero Block Team

A team section showcase featuring member profiles, titles, avatars, and bios.

## Properties

- **Section Title (`title`)**: Main team section headline.
- **Section Subtitle (`lead`)**: Accompanying description copy.
- **Team List JSON (`teamJson`)**: JSON array string of items:
  ```json
  [
    {
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
      "name": "Sarah Connor",
      "role": "Lead Architect",
      "bio": "Specializes in secure scalable infrastructure."
    }
  ]
  ```
- **Layout Variant (`layout`)**:
  - `layout-1`: 4-Column Avatar Grid (Standard grid)
  - `layout-2`: 2-Column Row Splits (Detailed cards)
- **Theme Mode (`themeStyle`)**: `light` / `dark`
