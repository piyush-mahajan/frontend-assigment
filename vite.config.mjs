import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  scripts: {
    build: "[my-framework] build --output public",
  },
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
