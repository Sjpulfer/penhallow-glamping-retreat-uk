import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { builderDevTools } from "@builder.io/dev-tools/vite";

export default defineConfig({
  plugins: [react(), builderDevTools()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
