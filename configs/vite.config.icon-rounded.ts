/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preserveDirectives(), dts()],
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: {
        icon: resolve(__dirname, '..', 'src', 'lib', 'icon', 'Rounded.tsx'),
      },
      fileName: (format, entryName) =>
        `react-material.${entryName}.${format === 'cjs' ? 'cjs' : 'js'}`,
      cssFileName: 'react-material.icon-rounded',
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
});
