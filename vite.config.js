import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function prerenderPreviewPlugin() {
  return {
    name: 'prerender-preview-middleware',
    configurePreviewServer(server) {
      const distDir = path.resolve(process.cwd(), 'dist');
      server.middlewares.use((req, res, next) => {
        if (!req.url || req.method !== 'GET') return next();
        const cleanUrl = req.url.split('?')[0].split('#')[0];

        // Let static assets pass through directly
        if (cleanUrl.includes('.') && !cleanUrl.endsWith('.html')) {
          return next();
        }

        const relPath = cleanUrl === '/' ? 'index.html' : path.join(cleanUrl.replace(/^\//, ''), 'index.html');
        const candidateFile = path.join(distDir, relPath);

        if (fs.existsSync(candidateFile) && fs.statSync(candidateFile).isFile()) {
          res.statusCode = cleanUrl === '/404' ? 404 : 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(fs.readFileSync(candidateFile, 'utf-8'));
          return;
        }

        // Unknown route -> serve real 404.html with HTTP 404 status
        const notFoundFile = path.join(distDir, '404.html');
        if (fs.existsSync(notFoundFile)) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(fs.readFileSync(notFoundFile, 'utf-8'));
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [tailwindcss(), react(), prerenderPreviewPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              icons: ['lucide-react', 'sonner']
            }
          }
        }
  }
}));
