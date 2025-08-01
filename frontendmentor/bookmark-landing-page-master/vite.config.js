import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/frontendmentor/space-tourism-website-main-deploy/', // 👈 REQUIRED for GitHub Pages
  plugins: [
    tailwindcss(),
  ],
})