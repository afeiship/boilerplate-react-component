const rmp = require('@feizheng/react-markdown-props');
const prettier = require('prettier');
const fs = require('fs');

require('@feizheng/next-js-core2');
require('@feizheng/next-replace-in-file');

nx.declare({
  statics: {
    init: function() {
      var instance = new this();
      instance.reset();
      instance.replace();
    }
  },
  methods: {
    reset: function() {
      fs.copyFileSync('./build/TEMPLATE.md', './README.md');
    },
    replace: function() {
      nx.replaceInFile('README.md', [
        ['__GENERATE_DOCS__', rmp('./src/components/index.js')],
        ['__GENERATE_DAPP__', fs.readFileSync('./public/index.js')]
      ]);
    }
  }
});
