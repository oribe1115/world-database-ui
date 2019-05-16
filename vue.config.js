module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    proxy: "http://150.95.157.67:10200",
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
