const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const chalk = require('chalk');

const filePath = path.join(process.cwd(), '.env');

// Expand everything to process.env
const result = dotenv.config({
  path: filePath,
  multiline: false,
});

// We wont stop process if we could not load .env
if (result.error) {
  console.log(chalk.bold.yellow("\n" + `WARN: Failed to load variables from '${filePath}' file.`));
  console.error(result.error);
}

dotenvExpand.expand(result);

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
