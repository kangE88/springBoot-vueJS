//vue.config.js
module.exports = {
  // https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
