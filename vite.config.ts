import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts(),
    vue()
  ],
  build: {
    lib: {
      name: 'Plugin',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: format => `index.js`,
    },
  }
})
