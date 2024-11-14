const { defineConfig } = require('cypress')
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');

module.exports = defineConfig({
    e2e: {
        //supportFile: false,
        setupNodeEvents(on, config) {
            return getCompareSnapshotsPlugin(on, config);
        }
    },
})