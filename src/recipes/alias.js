import path from "path";

export default {
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'resources'),
    }
  },
};
