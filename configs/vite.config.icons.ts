/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'

const iconEntries: Record<string, string> = {
  'icon-rounded': resolve(__dirname, '..', 'src', 'lib', 'icon', 'rounded.tsx'),
  'icon-sharp': resolve(__dirname, '..', 'src', 'lib', 'icon', 'sharp.tsx'),
  'icon-outlined': resolve(
    __dirname,
    '..',
    'src',
    'lib',
    'icon',
    'outlined.tsx',
  ),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preserveDirectives()],
  build: {
    emptyOutDir: false,
    cssCodeSplit: true,
    lib: {
      entry: iconEntries,
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
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
})
