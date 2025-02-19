// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    site: 'https://3ggoxie.github.io',
    markdown: {
        gfm: true, // 启用 GFM 支持
       
      },
});
