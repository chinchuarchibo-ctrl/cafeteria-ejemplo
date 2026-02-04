import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: "./", // 👈 ESTA LÍNEA ES LA CLAVE PARA GITHUB PAGES

    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || "AIzaSyCXtiJTgxbeluZAOI85hlcBobgooaXjJHc"),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || "AIzaSyCXtiJTgxbeluZAOI85hlcBobgooaXjJHc")
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
