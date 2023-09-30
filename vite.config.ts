import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 8445,
    // proxy: {
    //   '/api': {
    //     target: 'https://localhost:8441',
    //     changeOrigin: true,
    //   },
    //   // Pour SignalR
    //   '/signalr': {
    //     target: 'https://localhost:8441',
    //     changeOrigin: true,
    //   },
    //   // Pour l'authentification avec IdentityServer
    //   '/connect/token': {
    //     target: 'https://localhost:8443',
    //     changeOrigin: true,
    //   },
    // },
  },
});
