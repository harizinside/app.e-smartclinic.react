import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import preload from 'vite-plugin-preload'
import webfontDownload from 'vite-plugin-webfont-dl'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    preload(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
    ]),
    compression()
  ],
});
