const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const defaultPostCssConfig = {
  plugins: [
    'autoprefixer',
  ]
};

module.exports = (importLoaders = 1) => {
  return [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        esModule: true,
      }
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        modules: false,
        esModule: true,
        importLoaders
      }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: defaultPostCssConfig
      }
    },
  ]
}

