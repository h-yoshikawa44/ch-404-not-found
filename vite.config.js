import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ch-404-not-found/' : './',
  server: {
    open: true,
  },
});
