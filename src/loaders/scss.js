const Helpers = require('../helpers.js');
const createCssRules = require('./cssRuleFactory.js');

module.exports = {
  test: /\.s[ac]ss$/i,
  use: createCssRules(2).concat(
    {
      loader: require.resolve('sass-loader'),
      options: {
        additionalData: '$env: ' + Helpers.nodeEnv() + ';',
        sassOptions: {
          outputStyle: 'expanded'
        },
      }
    },
  )
};
