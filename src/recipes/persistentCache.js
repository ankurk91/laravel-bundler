const Helpers = require('../helpers.js');
const path = require('path');

// https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md
module.exports = {
  cache: (Helpers.isHmr() || Helpers.isWatch()) ? true : {
    type: 'filesystem',
    buildDependencies: {
      defaultWebpack: ['webpack/lib/'],
      laravelBundler: ['laravel-bundler/src/', 'laravel-bundler/package.json'],
      userConfig: [path.resolve(process.cwd(), 'webpack.config.js')]
    }
  },
}
