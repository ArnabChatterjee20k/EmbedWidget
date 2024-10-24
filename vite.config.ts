import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions:{
      output:{
        entryFileNames:"bundle.js",
        chunkFileNames:"bundle.js",
        assetFileNames:"style.css"
      }
    }
  }
})
