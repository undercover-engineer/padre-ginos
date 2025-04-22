import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [TanStackRouterVite(), react()],
});

/**
 * By default Vite will look for the index.html file in the root of the project and treat it as the entry point for the application
 * It'll crawl all your HTML, CSS, and JS you link to from there and create your project for you.
 * The server object allows you to configure the development server so that the backend and frontend run on the same port
 */
