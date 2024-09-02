import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sholaproject/', // Adjust base path if necessary
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
