import Helpers from '../helpers.js';
import createCssRules from './cssRuleFactory.js';

export default {
  test: /\.s[ac]ss$/i,
  use: createCssRules(2).concat(
    {
      loader: 'sass-loader',
      options: {
        api: 'legacy',
        additionalData: '$env: ' + Helpers.nodeEnv() + ';',
        sassOptions: {
          outputStyle: 'expanded'
        },
      }
    },
  )
};
