import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  test: {
    globals: true,           
    environment: 'jsdom',    
    setupFiles: './src/setupTests.js',
    coverage: {
      enabled: true, 
      provider: 'v8', 
      reporter: ['text', 'html'], 
    },
  },
})
