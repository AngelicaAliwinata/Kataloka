import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  client: '@hey-api/client-axios',
  input: `http://localhost:5001/openapi.json`,
  output: {
    format: 'prettier',
    path: 'app/api',
    lint: 'eslint'
  }
})
