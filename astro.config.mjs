// @ts-check
import { defineConfig, envField } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';
import icon from 'astro-icon';

import node from '@astrojs/node';

export default defineConfig({
  output: 'static',
  integrations: [tailwindcss(), react(), icon()],

  env: {
    schema: {
      PUBLIC_API_URL: envField.string({ context: 'server', access: 'secret' })
    }
  },

  adapter: node({mode: 'standalone'}),
});