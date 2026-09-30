import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const secret = env.TURNSTILE_SECRET_KEY?.trim();

  return {
    plugins: [
      react(),
      {
        name: 'contact-turnstile-config',
        apply: 'build',
        buildStart() {
          if (!env.VITE_TURNSTILE_SITE_KEY?.trim() || !secret) {
            this.error(
              'Vyplň VITE_TURNSTILE_SITE_KEY a TURNSTILE_SECRET_KEY v .env pred buildom.',
            );
          }
        },
        generateBundle() {
          // PHP single-quoted strings only need backslashes and quotes escaped.
          const phpSecret = secret.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
          this.emitFile({
            type: 'asset',
            fileName: 'contact-config.php',
            source: `<?php\nreturn ['turnstileSecretKey' => '${phpSecret}'];\n`,
          });
        },
      },
    ],
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        src: resolve('src/'),
      },
    },
    esbuild: {
      loader: 'jsx',
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
  };
});
