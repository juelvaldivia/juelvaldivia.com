import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://juelvaldivia.com/',
  // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'always',
  // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
  output: 'hybrid',
  adapter: netlify(),
  routes: [
    {
      path: '/invitaciones/:guest',
      component: 'src/pages/invitaciones/[guest].astro',
    },
  ],
});
