import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': path.resolve(__dirname, '/src/components'),
      '@components-layout': path.resolve(__dirname, '/src/components/layout'),
      '@components-weather': path.resolve(__dirname, '/src/components/weather'),
      '@context': path.resolve(__dirname, '/src/context'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@services': path.resolve(__dirname, '/src/services'),
      '@services-api': path.resolve(__dirname, '/src/services/api'),
      '@styles': path.resolve(__dirname, '/src/styles'),
      '@styles-base': path.resolve(__dirname, '/src/styles/base'),
      '@styles-components': path.resolve(__dirname, '/src/styles/components'),
      '@styles-layout': path.resolve(__dirname, '/src/styles/components/layout'),
      '@styles-weather': path.resolve(__dirname, '/src/styles/components/weather'),
      '@styles-pages': path.resolve(__dirname, '/src/styles/pages'),
    },
  },

})
