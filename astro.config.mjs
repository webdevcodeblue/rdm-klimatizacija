// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// ==================== SITE CONFIGURATION ====================
// VAŽNO: Site URL je sada importan iz centralizirane konfiguracije
// Ne mijenjati URL ovdje - mijenjati u src/config/site.ts
//
// Import će biti dodан u build procesu, za sada koristimo direktnu konstantu
// jer Astro config ne podržava direktne TypeScript importе u .mjs fajlovima
const SITE_URL = 'https://www.rmfrigoteam.hr';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable SSR for URL params to work
  adapter: vercel(),
  site: SITE_URL, // ← Finalna produkcijska domena
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'hr',
        locales: {
          hr: 'hr-HR',
        },
      },
    })
  ]
});
