import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'   // <-- Add this line

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, 'destination.html'),
        crew: resolve(__dirname, 'crew.html'),
        technology: resolve(__dirname, 'technology.html'),
      }
    }
  }
})
