import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://skandesh.github.io/oneplusoneisten',
  base: '/oneplusoneisten/',
  integrations: [mdx(), sitemap()],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});