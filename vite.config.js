import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages lives under /leaf-sample-vite/; local dev uses `/` so the dev server and
// `BrowserRouter basename` stay in sync with the real URL.
// https://vite.dev/config/shared-options.html#base
export default defineConfig(({ command, mode }) => ({
  base:
    command === 'build' || (command === 'serve' && mode === 'production')
      ? '/leaf-sample-vite/'
      : '/',
  plugins: [react(), tailwindcss()],
}))
