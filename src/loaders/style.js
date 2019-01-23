const Helpers = require('../helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cosmiconfig = Helpers.ensureModule('cosmiconfig');

const defaultPostCssConfig = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 1%', 'not IE 11']
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        }]
    })
  ]
};

const userConfigExists = !!cosmiconfig('postcss').searchSync();

function defaultLoaderStack(enableModules = false) {
  const loaders = [
    'css-hot-loader', // will auto disable itself in modes other than hmr
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: !!enableModules,
        sourceMap: Helpers.isDev(),
        importLoaders: Helpers.isProduction() ? 2 : 1,
      }
    },
    Helpers.isProduction() ?
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
          ident: 'postcss',
        }
      } : false,
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

  // Allow overriding postCss configs
  !userConfigExists && loaders.forEach(loader => {
    if (loader.loader === 'postcss-loader') {
      Object.assign(loader.options, defaultPostCssConfig)
    }
  });

  return loaders;
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
