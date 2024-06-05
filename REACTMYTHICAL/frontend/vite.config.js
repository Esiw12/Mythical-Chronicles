import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Сделать сервер доступным в локальной сети
    port: 5173,
  },
  build: {
    outDir: 'build',
  },
  preview: {
    port: 3000, // Порт для предпросмотра сборки
  },
  define: {
    'process.env': {},
    'global': {},
  }
});