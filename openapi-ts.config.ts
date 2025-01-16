import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  client: '@hey-api/client-axios',
  input: `https://kataloka-mobile-backend.kataloka-mobile.workers.dev/openapi.json`,
  output: {
    format: 'prettier',
    path: 'app/api',
    lint: 'eslint'
  }
})
