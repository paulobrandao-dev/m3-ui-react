/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import loadVersion from 'vite-plugin-package-version'
import mdx from '@mdx-js/rollup'

const libEntries: Record<string, string> = {
  'theme-client': resolve(__dirname, 'src', 'lib', 'theme', 'client.ts'),
  'theme-server': resolve(__dirname, 'src', 'lib', 'theme', 'server.ts'),
  'icon-rounded': resolve(__dirname, 'src', 'lib', 'icon', 'rounded.tsx'),
  'icon-sharp': resolve(__dirname, 'src', 'lib', 'icon', 'sharp.tsx'),
  'icon-outlined': resolve(__dirname, 'src', 'lib', 'icon', 'outlined.tsx'),
  font: resolve(__dirname, 'src', 'lib', 'components', 'font.tsx'),
  appbar: resolve(__dirname, 'src', 'lib', 'components', 'appbar.tsx'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx(),
    react(),
    loadVersion(),
    preserveDirectives(),
    dts({
      bundleTypes: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
      include: ['src/lib'],
      exclude: [
        'src/docs',
        'node_modules',
        '**/*.{test,spec}.@(ts|tsx)',
        'src/vite-env.d.ts',
      ],
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
