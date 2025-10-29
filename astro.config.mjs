// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable SSR for URL params to work
  adapter: vercel(),
  site: 'https://rdm-klimatizacija.hr',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
