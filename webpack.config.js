const path = require('path');

module.exports = {
  mode: 'production',

  entry: {
    core: './src/bundles/core.js',
    a: './src/bundles/a.js',
    b: './src/bundles/b.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
