import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    build: {
      assetsInlineLimit: 0 // Para evitar inlining de imágenes
    },
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@lib': path.resolve('./src/lib'),
        '@ui': path.resolve('./src/components/ui'),
      }
    }
  }
});
