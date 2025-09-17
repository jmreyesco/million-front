import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // 👉 habilita describe, it, expect sin imports
    environment: "jsdom", // 👉 necesario si pruebas React o DOM
  },
});
