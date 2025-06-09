
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './attribute-window.ts',
      name: 'attribute-window',
      fileName: (format) => `attribute-window.${format}.js`,
      formats: ['es', 'umd']
    },
    outDir: 'C:\Users\AvinashGupta\Documents\Personal\Apps\zero-marketplace\server\plugins-build\attribute-window-v1.0.0',
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'Lit'
        }
      }
    }
  }
});
