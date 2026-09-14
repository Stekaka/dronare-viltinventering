import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://älginventering.se',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
