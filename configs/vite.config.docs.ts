/// <reference types="vitest/config" />

import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { defineConfig } from 'vite'
import loadVersion from 'vite-plugin-package-version'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({ remarkPlugins: [remarkGfm], rehypePlugins: [rehypeHighlight] }),
    },
    react(),
    loadVersion(),
  ],
  build: { outDir: 'build' },
  base: '/m3-ui-react',
  resolve: {
    alias: {
      '@': resolve(__dirname, '..', 'src'),
    },
  },
})
