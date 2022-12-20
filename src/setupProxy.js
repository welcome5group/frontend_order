const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://www.fingerorder.ga/",
      changeOrigin: true,
    })
  );
};
