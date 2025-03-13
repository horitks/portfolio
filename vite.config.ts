import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'

export default defineConfig({
  plugins: [
    devServer({
      entry: 'src/index.ts',
      exclude: [],
      injectClientScript: true
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        format: 'es',
        dir: 'dist',
        entryFileNames: 'index.js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
        exports: 'named'
      }
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: () => 'index.js'
    }
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'hono/jsx',
    loader: 'tsx'
  },
  ssr: {
    target: 'node'
  }
}) 