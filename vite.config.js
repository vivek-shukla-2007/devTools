import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',
  publicDir: 'public',
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: '/'
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})