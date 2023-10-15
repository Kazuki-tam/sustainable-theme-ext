const path = require('path');
const themeCustomExtAssetsPath = path.resolve(__dirname, '../extensions/theme-custom-ext/assets');

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV || 'development';
// Source map setting
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  // Entry point
  entry: {
    'custom-script-ext': './src/ts/custom-script-ext.ts',
  },
  // Output files
  output: {
    path: themeCustomExtAssetsPath,
    filename: '[name].js',
  },
  devtool: enabledSourceMap ? 'source-map' : 'eval-source-map',
};
