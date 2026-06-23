// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Tailwind v4 via PostCSS (sem @astrojs/tailwind)
export default defineConfig({
  site: 'https://renan.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [react()],
  build: {
    assets: 'assets',
  },
  vite: {
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
});
