import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,

    rollupOptions: {
      input: {
        content: path.resolve(__dirname, 'public', 'content.ts'),
        'delete-content': path.resolve(
          __dirname,
          'public',
          'delete-content.ts'
        ),
        'service-worker': path.resolve(__dirname, 'service-worker.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
