# RDM Klimatizacija - Web Catalog

Professional web catalog for HVAC equipment (air conditioning, heat pumps, ventilation systems) built with Astro and Strapi CMS.

## 🎯 Project Overview

This is a web catalog for RDM Klimatizacija featuring:
- 50-100 products with "Send Inquiry" functionality (NOT e-commerce)
- Strapi CMS integration for client product management
- Product filters by manufacturer, power, and area coverage
- Fully responsive design (mobile/tablet/desktop)
- Professional agency-level quality

## 🎨 Styling Approach - IMPORTANT!

**This project uses SCOPED CSS STYLES exclusively:**

✅ **What we use:**
- Scoped CSS in every `.astro` component's `<style>` block
- CSS Custom Properties (design tokens) in `src/styles/global.css`
- BEM methodology for class naming
- Mobile-first responsive design
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)

❌ **What we DON'T use:**
- NO Tailwind CSS
- NO external CSS frameworks (Bootstrap, etc.)
- NO global utility classes
- NO inline styles

### Why Scoped Styles?

1. **Component Isolation** - No style conflicts between components
2. **Easy Maintenance** - Change one component without breaking others
3. **Better Readability** - Styles are co-located with components
4. **Automatic Optimization** - Astro optimizes and minifies scoped styles
5. **No Class Name Collisions** - Can use same class names across components

### Example:

```astro
---
// Component logic
---

<div class="card">
  <h2 class="card__title">Title</h2>
</div>

<style>
  .card {
    padding: var(--space-4);
    background: var(--color-white);
    border-radius: var(--border-radius-lg);
  }

  .card__title {
    font-size: var(--text-2xl);
    color: var(--text-primary);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .card {
      padding: var(--space-3);
    }
  }
</style>
```

## 📦 Product Card Types - CMS Integration

There are **3 main types of product cards** used throughout the site:

### 1. **Homepage Featured Cards** (`ProductShowcase.astro`)
- **Location**: `/` (homepage - "Izdvojeni proizvodi" section)
- **Layout**: 4 cards in grid
- **Features**:
  - Badge (Akcija, Novo, etc.)
  - Product image with quick view button
  - ✓/✗ Stock status (green/red)
  - Category label
  - Product name
  - Specs (power, area, energy class)
  - Features tags
  - Price with original/discount
  - "Pogledaj" button
- **CMS Fields**: `inStock`, `badge`, `image`, `name`, `price`, `originalPrice`, `features`, `specifications`

### 2. **Product Listing Cards** (`ProductCard.astro`)
- **Location**: `/proizvodi` (products listing page)
- **Views**: Grid view and List view
- **Mobile**: Title moved below image, stock status simplified
- **Desktop**: Full specs with 4 info cards (cooling, heating, area, energy class)
- **Features**:
  - Badge
  - Product image
  - ✓/✗ Stock status (desktop: green badge, mobile: green/red checkmark)
  - Manufacturer + product name
  - Quick info cards (cooling/heating power, area, energy class)
  - Description (list view only)
  - Features list (list view only)
  - Price + action buttons
- **CMS Fields**: `inStock`, `badge`, `image`, `manufacturer`, `name`, `cooling`, `heating`, `area`, `energyClass`, `description`, `features`, `price`, `originalPrice`

### 3. **Related Products Cards** (`RelatedProducts.astro`)
- **Location**: `/proizvodi/[slug]` (individual product page - "Slični proizvodi" section)
- **Same component used for**: Homepage and product detail pages
- **Layout**: 4 cards in grid
- **Features**: Same as Homepage Featured Cards
- **CMS Fields**: Same as Homepage Featured Cards

**Important for CMS:**
- All 3 card types use the same `inStock` boolean field
- `inStock: true` → Shows "✓ Proizvod je dostupan" (green)
- `inStock: false` → Shows "✗ Proizvod nije dostupan" (red)
- Homepage and Related Products share the same card component
- Product listing has unique card with grid/list view toggle

## 🚀 Project Structure

```text
/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── Categories.astro
│   │   │   ├── WhyChooseUs.astro
│   │   │   ├── ProductShowcase.astro (Card Type #1)
│   │   │   └── BrandLogos.astro
│   │   └── products/
│   │       ├── ProductCard.astro (Card Type #2)
│   │       ├── RelatedProducts.astro (Card Type #3)
│   │       └── ProductFilter.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── proizvodi/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── data/
│   │   └── products/
│   │       ├── klima-uredaji.ts
│   │       ├── multi-klima.ts
│   │       └── index.ts
│   ├── styles/
│   │   └── global.css
│   └── lib/
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
