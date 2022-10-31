import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const defaultPostCssConfig = {
  plugins: [
    'autoprefixer',
  ]
};

export default (importLoaders = 1) => {
  return [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        esModule: true,
      }
    },
    {
      loader: 'css-loader',
      options: {
        modules: false,
        esModule: false,
        importLoaders
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: defaultPostCssConfig
      }
    },
  ]
}

