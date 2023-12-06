const { defineConfig } = require('cypress')
const browserify = require('@cypress/browserify-preprocessor');
const { default: cucumber } = require('cypress-cucumber-preprocessor');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, cypressConf) {
      const options = {
        ...browserify.defaultOptions,
      };
      on('file:preprocessor', cucumber(options));
    },
    specPattern: 'cypress/e2e/**/features/*.{feature,features}',
    excludeSpecPattern: '**/integration/modules/*.js',
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true,
  },
})