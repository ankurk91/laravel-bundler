import createCssRules from './cssRuleFactory.js';

export default {
  test: /\.css$/i,
  use: createCssRules(1)
};
