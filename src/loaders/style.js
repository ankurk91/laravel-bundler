const Helpers = require('../helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cosmiconfig = Helpers.ensureModule('cosmiconfig');

const defaultPostCssConfig = {
  plugins: [
    require('autoprefixer')(),
    Helpers.isProduction() ? require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        }]
    }) : false
  ].filter(Boolean)
};

const userConfigExists = !!cosmiconfig('postcss').searchSync();

function defaultLoaderStack(enableModules = false) {
  return [
    'css-hot-loader', // will auto disable itself in modes other than hmr
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: !!enableModules,
        sourceMap: Helpers.isDev(),
        importLoaders: 2,
      }
    },
    {
      loader: 'postcss-loader',
      options: Object.assign({}, {
        sourceMap: Helpers.isDev(),
        ident: 'postcss',
      }, userConfigExists ? {} : defaultPostCssConfig)
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: Helpers.isDev(),
        minimize: Helpers.isProduction(),
        implementation: require('sass'),
        fiber: require('fibers'), // speed up dart-sass
      }
    },
  ].filter(Boolean);
}

module.exports = {
  // Handle css and scss both
  test: /\.s[ac]ss|\.css/,
  oneOf: [
    {
      // support css modules
      // https://vue-loader.vuejs.org/guide/css-modules.html#opt-in-usage
      resourceQuery: /module/,
      use: defaultLoaderStack(true)
    },
    {
      use: defaultLoaderStack()
    }
  ]
};
