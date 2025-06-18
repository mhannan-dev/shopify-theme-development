import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "./src/styles.css",
      output: {
        assetFileNames: "tailwind.css",
      },
    },
    outDir: "./assets",
    emptyOutDir: false,
  },
});
