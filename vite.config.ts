
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Konfigurasi Vite untuk GitHub Pages
export default defineConfig({
  // Path repository GitHub
  base: '/cuspack/',

  // Plugin React
  plugins: [react()],

  // Alias folder src
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // Optimasi dependency
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
