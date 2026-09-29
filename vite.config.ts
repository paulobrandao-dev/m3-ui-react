/// <reference types="vitest/config" />

import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import loadVersion from 'vite-plugin-package-version'

const libEntries: Record<string, string> = {
  'theme-client': resolve(__dirname, 'src', 'lib', 'theme', 'client.ts'),
  'theme-server': resolve(__dirname, 'src', 'lib', 'theme', 'server.ts'),
  hooks: resolve(__dirname, 'src', 'lib', 'hooks', 'index.ts'),
  font: resolve(__dirname, 'src', 'lib', 'components', 'font.tsx'),
  appbar: resolve(__dirname, 'src', 'lib', 'components', 'appbar.tsx'),
  button: resolve(__dirname, 'src', 'lib', 'components', 'button.tsx'),
  'icon-button': resolve(
    __dirname,
    'src',
    'lib',
    'components',
    'icon-button.tsx',
  ),
  'nav-rail': resolve(__dirname, 'src', 'lib', 'components', 'nav-rail.tsx'),
  content: resolve(__dirname, 'src', 'lib', 'components', 'content.tsx'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({ remarkPlugins: [remarkGfm], rehypePlugins: [rehypeHighlight] }),
    },
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
    cssCodeSplit: false,
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
