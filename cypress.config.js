const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://test.dudullu.com",
    viewportHeight: 660,
    viewportWidth: 1000,
    setupNodeEvents(on, config) {
    },
  },
});
