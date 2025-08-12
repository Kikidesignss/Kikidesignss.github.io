import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Kikidesignss.github.io/',  // <== Replace with your actual repo name here
  plugins: [react()],
});
