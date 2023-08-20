import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    rollupOptions: {},
  },
  plugins: [react()],
  define: { 'process.env': process.env }
});

