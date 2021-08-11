const createCssRules = require('./cssRuleFactory.js');

module.exports = {
  test: /\.css$/i,
  use: createCssRules(1)
};
