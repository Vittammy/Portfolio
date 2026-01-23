import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    alias: {
      // => Principal
      '@style': path.resolve(__dirname, './src/css'),
      '@basics': path.resolve(__dirname, './src/imports'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),

      // => Acessibilidade
      '@components': path.resolve(__dirname, './src/components'),
      '@containers': path.resolve(__dirname, './src/components/Containers'),
      '@control': path.resolve(__dirname, './src/components/Control'),
      '@layout': path.resolve(__dirname, './src/components/Layout'),
      '@navigation': path.resolve(__dirname, './src/components/Navigation'),
    },
  },
})
