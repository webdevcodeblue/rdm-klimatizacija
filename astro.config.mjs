// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable SSR for URL params to work
  adapter: vercel(),
  site: 'https://rdm-klimatizacija.hr',
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
