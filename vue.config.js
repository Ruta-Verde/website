module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0]["title"] = "Ruta Verde";
      return args;
    });
  }
};
