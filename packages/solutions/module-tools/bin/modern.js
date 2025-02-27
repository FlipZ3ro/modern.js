#!/usr/bin/env node
const { INTERNAL_MODULE_TOOLS_PLUGINS } = require('@modern-js/utils');

require('@modern-js/core/runBin').run({
  internalPlugins: {
    cli: INTERNAL_MODULE_TOOLS_PLUGINS,
  },
  initialLog: `Modern.js Module v${require('../package.json').version}`,
});
