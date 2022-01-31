import { defineConfig } from "vite";
import svgr from "@honkhonk/vite-plugin-svgr";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/e-commerce/",
  build: {
    chunkSizeWarningLimit: 1600,
  },
});