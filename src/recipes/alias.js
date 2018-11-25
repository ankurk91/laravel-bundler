const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'resources/js'),
      '@vendor': path.resolve(process.cwd(), 'vendor'),
    }
  },
};
