import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs" // GH pages requires static files in /docs for some reason...
  },
  plugins: [react()]
})
