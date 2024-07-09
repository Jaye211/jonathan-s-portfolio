import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    // Include specific packages if necessary
    include: ['@react-three/drei'],
  },
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    port: 3000

  },
 

})
