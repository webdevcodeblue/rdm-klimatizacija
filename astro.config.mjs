// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable SSR for URL params to work
  site: 'https://rdm-klimatizacija.hr',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
