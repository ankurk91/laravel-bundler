const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const expand = require('dotenv-expand');
const chalk = require('chalk');

const filePath = path.join(process.cwd(), '.env');

// Expand everything to process.env
const result = dotenv.config({
  path: filePath,
});

// We wont stop process if we could not load .env
if (result.error) {
  console.log(chalk.bold.yellow("\n" + `WARN: Unable to load variables from '${filePath}' file.`));
  console.error(result.error);
}

expand(result);

function getDefinitions() {
  let regex = /^MIX_/i;

  // Filter out env vars that don't begin with MIX_
  return Object.keys(process.env)
    .filter(key => regex.test(key))
    .reduce((result, key) => {
      result[key] = process.env[key];

      return result;
    }, {});
}

module.exports = {
  plugins: [
    new webpack.EnvironmentPlugin(
      getDefinitions()
    )
  ]
};
