import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://mxylumos.github.io/F25_React',
  plugins: [react()],
})
