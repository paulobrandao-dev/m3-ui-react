/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build' },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
