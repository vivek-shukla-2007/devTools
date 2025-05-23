import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, './'),
  publicDir: path.resolve(__dirname, './public'),
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    open: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})