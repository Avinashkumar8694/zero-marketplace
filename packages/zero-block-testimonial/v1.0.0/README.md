# Zero Block Testimonial

A testimonials showcase section featuring customer feedback quotes, reviewer roles, photos, and star ratings.

## Properties

- **Section Title (`title`)**: Main testimonials section heading.
- **Section Subtitle (`lead`)**: Sub-headline copy.
- **Reviews JSON List (`testimonialsJson`)**: JSON array string of items:
  ```json
  [
    {
      "quote": "This component library completely speeds up our layout deployments.",
      "rating": 5,
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      "name": "Sarah Jenkins",
      "role": "Tech Lead, Acme Corp"
    }
  ]
  ```
- **Layout Variant (`layout`)**:
  - `layout-1`: 3-Column Reviews Grid (Side-by-side)
  - `layout-2`: Single Spotlight Quote (Large focused review)
- **Theme Mode (`themeStyle`)**: `light` / `dark`
