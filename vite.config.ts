import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Project Pages URL: https://earthborn101.github.io/website-portfolio/
  base: process.env.GITHUB_PAGES === 'true' ? '/website-portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['@phosphor-icons/react'],
  },
  server: {
    host: '0.0.0.0',
    port: 4321,
    strictPort: true,
  },
})
