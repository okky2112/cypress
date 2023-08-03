const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  //reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //baseUrl: "https://www.enterkomputer.com/",
    baseUrl: "https://accounts.bhinneka.com/",
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  pageLoadTimeout: 10000,
  reporter: "cypress-testrail-all-status",
  reporterOptions: {
    host: "https://okky2112.testrail.io/",
    username: "okky2112@gmail.com",
    password: "lrs9afe2rLZqoEA3R4Qa-3K4aQwfrpPAG4oQyfFcC",
    projectId: 1,
    runId: 1,
  }
});
