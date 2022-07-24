import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    pageLoadTimeout: 60000,
    viewportWidth: 1440,
    viewportHeight: 2560,
  },
});
