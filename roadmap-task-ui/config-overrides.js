const { removeModuleScopePlugin, override } = require('customize-cra');

// This is here to override webpack config(remove ModuleScopePlugin) from CRA to allow importing stuff outside of src.
// See roadmap-task-ui/src/services/constants/index.ts
module.exports = override(
  removeModuleScopePlugin()
);
