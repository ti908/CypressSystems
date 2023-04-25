const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/assessments/*.js',
    screenshotsFolder: 'cypress/failures/ screenshots'
  },
  chromeWebSecurity: false,
  
  viewportHeight: 720,
  viewportWidth: 1280,
});
