import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown'
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://slabby.xyz',
  integrations: [mdx(), sitemap(), robotsTxt(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },}),
    ]
});