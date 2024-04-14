import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
    test: {
      globals: true,
      environment: 'happy-dom',
    },
  }
})
