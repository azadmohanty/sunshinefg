
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          // Fix: `__dirname` is not available in ES modules. Use `process.cwd()` to get the project root.
          // FIX: Replaced process.cwd() with '.' to avoid TypeScript type errors while achieving the same path resolution.
          '@': path.resolve('.'),
        }
      }
    };
});
