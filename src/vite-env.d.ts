/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Calendly scheduling page embedded in the booking section (injected in vite.config.ts). */
  readonly CALENDLY_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
