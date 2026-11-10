// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://goodwavesurfmorocco.com',
  server: { port: 4400 },

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  adapter: cloudflare(),
});