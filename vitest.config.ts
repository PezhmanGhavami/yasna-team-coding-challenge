import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
