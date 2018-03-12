const path = require('path');

function coreBundleCacheGroups(coreBundles) {
  const cacheGroups = {};
  const coreChunkNames = Object.keys(coreBundles);

  // First bundle listed takes highest priority.
  let priority = coreChunkNames.length;

  coreChunkNames.forEach((name) => {
    cacheGroups[name] = {
      name,
      chunks: 'all',
      minSize: 0,
      minChunks: 1,
      reuseExistingChunk: true,
      priority,
      enforce: true,
      test(module, chunks) {
        return chunks.some((chunk) => {
          return chunk.name === name;
        });
      },
    };

    priority -= 1;
  });

  return cacheGroups;
}

const coreBundles = {
  core: './src/bundles/core.js',
  coreB: './src/bundles/core-b.js',
  coreC: './src/bundles/core-c.js',
};

module.exports = {
  mode: 'none',

  entry: {
    ...coreBundles,
    a: './src/bundles/a.js',
    b: './src/bundles/b.js',
    c: './src/bundles/c.js',
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    runtimeChunk: 'single',

    splitChunks: {
      cacheGroups: {
        ...coreBundleCacheGroups(coreBundles),
      },
    },
  },
};
