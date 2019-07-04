const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [
        '!.gitignore',
        './js/',
        './css/',
        './fonts/',
        './images/',
        './mix-manifest.json',
      ],
      verbose: true,
    }),
  ]
};
