import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/scss/main.scss";`
      }
    }
  },
  // base: process.env.VITE_NODE_ENV === 'production' ? '/Portfolio/' : '/',
  base: process.env.NODE_ENV === 'production'
    ? '/Portfolio/'
    : '/',
  build: {
    outDir: 'docs'
  }
})