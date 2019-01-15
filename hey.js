module.exports = {
  root: "build",
  webpack: {
    umd: {
      entry: "./global.js",
      library: "G",
      filename: 'global.js'
    }
  }
};
