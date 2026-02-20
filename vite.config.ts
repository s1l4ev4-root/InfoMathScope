import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "./public"),
      "@fonts": path.resolve(__dirname, "./public/fonts"),
      "@icons": path.resolve(__dirname, "./public/icons"),
      "@images": path.resolve(__dirname, "./public/images"),
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
});
