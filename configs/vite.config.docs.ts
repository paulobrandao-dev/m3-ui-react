/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import loadVersion from 'vite-plugin-package-version';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), loadVersion()],
  build: { outDir: 'build' },
  base: '/m3-ui-react',
  resolve: {
    alias: {
      '@': resolve(__dirname, '..', 'src'),
    },
  },
});
