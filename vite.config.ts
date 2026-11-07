import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load every variable (no VITE_ prefix needed) from .env files and the host environment.
  const env = loadEnv(mode, '.', '')

  return {
    plugins: [react()],
    define: {
      // Only this one value is exposed to the browser bundle.
      'import.meta.env.CALENDLY_URL': JSON.stringify(env.CALENDLY_URL ?? ''),
    },
  }
})
