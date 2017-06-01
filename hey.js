module.exports = {
  root: "build",
  webpack: {
    umd: {
      entry: "./global.js",
      library: "Global",
      filename: 'global.js'
    }
  }
};
