import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import { Link } from 'astro/components';

const LIVE_URL = "https://Arbyl.github.io";

// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  integrations: [tailwind()]
});