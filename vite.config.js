import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'Components': fileURLToPath(new URL('./src/Components', import.meta.url)),
      'Pages': fileURLToPath(new URL('./src/Pages', import.meta.url)),
      'utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      'styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      'icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
      'Icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
      'Store': fileURLToPath(new URL('./src/store', import.meta.url)),
    }
  },
})
