const Helpers = require('../helpers.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cosmiconfig = require('cosmiconfig');

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

const userConfigExists = !!cosmiconfig.cosmiconfigSync('postcss').search();

function defaultLoaderStack(enableModules = false) {
  return [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: Helpers.isHmr(),
        reloadAll: true,
      }
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        modules: enableModules,
        sourceMap: Helpers.sourceMapEnabled(),
        importLoaders: 2,
      }
    },
    {
      loader: require.resolve('postcss-loader'),
      options: Object.assign({}, {
        sourceMap: Helpers.sourceMapEnabled(),
        ident: 'postcss',
      }, userConfigExists ? {} : defaultPostCssConfig)
    },
    {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: Helpers.sourceMapEnabled(),
        additionalData: '$env: ' + process.env.NODE_ENV + ';',
        sassOptions: {
          outputStyle: 'expanded'
        },
      }
    },
  ];
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
