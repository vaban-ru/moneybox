module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_variables.scss";@import "@/scss/_mixins.scss";`,
      },
    },
  },

  chainWebpack: (config) => {
    config.module.rule("svg-sprite").use("svgo-loader").loader("svgo-loader");
  },
};
