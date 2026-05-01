//this file is enabling the react plugins
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugind: [react()],
})