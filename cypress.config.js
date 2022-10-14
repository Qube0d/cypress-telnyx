const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");


module.exports = defineConfig({
    env: {
    allureResultsPath: "allure-results",
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  chromeWebSecurity: false 
  }
})





// module.exports = defineConfig({
//   e2e: {
//       async setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });

//       on("file:preprocessor", bundler);
//       allureWriter(on, config);
//       await addCucumberPreprocessorPlugin(on, config);
//       return config;
//     },
//     //   setupNodeEvents(on, config) {
//     //    chromeWebSecurity: false
//     //   // implement node event listeners here
//     // },
//   chromeWebSecurity: false ,
//   },
// });
