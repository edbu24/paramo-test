const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1500,
  viewportWidth: 1500,
  video: false,
  e2e: {
    baseUrl: 'http://demo.casino',
    chromeWebSecurity: false,
  },
});
