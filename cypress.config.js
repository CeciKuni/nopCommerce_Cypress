const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://admin-demo.nopcommerce.com",
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    testIsolation: false,
    video: true,
    videosFolder: "cypress/videos",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      ignoreVideos: true,
    }
  },
});
