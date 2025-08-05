/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import loadVersion from 'vite-plugin-package-version';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    loadVersion(),
    preserveDirectives(),
    dts({
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src', 'lib', 'index.ts'),
        theme: resolve(__dirname, 'src', 'lib', 'theme', 'index.ts'),
      },
      fileName: (format, entryName) =>
        `react-material${entryName !== 'index' ? `.${entryName}` : ''}.${format === 'cjs' ? 'cjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['tests/setupTest.ts'],
    coverage: {
      provider: 'istanbul',
      include: ['src/lib/**'],
      reporter: ['text', 'html', 'clover', 'json', 'json-summary'],
    },
  },
});
