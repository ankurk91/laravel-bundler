const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'resources'),
      // allows to load files from composer's vendor directory
      '@vendor': path.resolve(process.cwd(), 'vendor'),
    }
  },
};
