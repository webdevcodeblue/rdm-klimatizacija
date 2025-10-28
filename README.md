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
│   │   │   ├── ProductShowcase.astro
│   │   │   └── BrandLogos.astro
│   │   └── products/
│   │       ├── ProductCard.astro
│   │       └── ProductFilter.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── proizvodi/
│   │       └── index.astro
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
