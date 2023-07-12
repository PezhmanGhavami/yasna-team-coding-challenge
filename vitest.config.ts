import { defineVitestConfig } from "nuxt-vitest/config";
import path from "path";

export default defineVitestConfig({
  test: {
    environment: "nuxt",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
