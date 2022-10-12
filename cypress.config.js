const { defineConfig } = require("cypress");



module.exports = defineConfig({
           chromeWebSecurity: false ,
  e2e: {
    setupNodeEvents(on, config) {
       chromeWebSecurity: false 
      // implement node event listeners here
    },
  },
});
