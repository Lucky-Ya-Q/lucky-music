import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0' // 开启内网访问
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/scss/mixin.scss';
          @import '@/assets/scss/variable.scss';
        `
      }
    }
  }
})
