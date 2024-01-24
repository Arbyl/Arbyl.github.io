import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";


const LIVE_URL = "https://Arbyl.github.io";

// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  integrations: [tailwind()]
});