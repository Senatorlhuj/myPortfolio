import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcssPostcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import path from 'path' 

export default defineConfig({
   base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcssPostcss(),
        autoprefixer(),
      ],
    },
  },
})