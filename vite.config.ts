/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import loadVersion from 'vite-plugin-package-version'

const libEntries: Record<string, string> = {
  index: resolve(__dirname, 'src', 'lib', 'index.ts'),
  theme: resolve(__dirname, 'src', 'lib', 'theme', 'index.ts'),
  'icon-rounded': resolve(__dirname, 'src', 'lib', 'icon', 'rounded.tsx'),
  'icon-sharp': resolve(__dirname, 'src', 'lib', 'icon', 'sharp.tsx'),
  'icon-outlined': resolve(__dirname, 'src', 'lib', 'icon', 'outlined.tsx'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    loadVersion(),
    preserveDirectives(),
    dts({
      bundleTypes: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: libEntries,
      formats: ['es'],
      fileName: (_format, entryName) =>
        `m3-ui${entryName !== 'index' ? `.${entryName}` : ''}.js`,
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
})
