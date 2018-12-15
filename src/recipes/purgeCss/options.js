// copied from https://github.com/spatie/laravel-mix-purgecss
const Helpers = require('../../helpers');

const globAll = Helpers.ensureModule('glob-all');
const path = require('path');

function flatMap(array, callback) {
  return Array.prototype.concat.apply([], array.map(callback));
}

const extractAllSelectorLikeStrings = class {
  static extract(content) {
    return content.match(/[a-zA-Z0-9-:_/]+/g) || [];
  }
};

const rootPath = location => {
  return path.resolve(process.cwd(), location)
};

const options = {
  globs: [],
  folders: ['resources'],
  extensions: ['html', 'js', 'jsx', 'ts', 'tsx', 'php', 'vue'],
};

options.globs.push(
  rootPath('app/**/*.php'),
  ...flatMap(options.folders, folder => {
    return options.extensions.map(extension =>
      rootPath(`${folder}/**/*.${extension}`)
    );
  })
);

const globs = globAll
  .sync(options.globs, {mark: true})
  .filter(f => !/\/$/.test(f));

// https://www.purgecss.com/configuration
module.exports = {
  paths: () => globs,
  extractors: [
    {
      extractor: extractAllSelectorLikeStrings,
      extensions: options.extensions,
    },
  ],
  whitelistPatterns: [
    /-active$/, /-enter$/, /-leave-to$/,
    // bootstrap pagination templates resides in `vendor/laravel/framework`
    /^pagination/, /^page-*/
  ],
  fontFace: true,
  keyframes: true
};
