const path = require('path');

module.exports = {
  mode: 'none',

  entry: {
    core: './src/bundles/core.js',
    coreB: './src/bundles/core-b.js',
    a: './src/bundles/a.js',
    b: './src/bundles/b.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    runtimeChunk: 'single',

    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,

      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },

        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
};
