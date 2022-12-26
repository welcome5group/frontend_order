const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.fingerorder.ga/",
      changeOrigin: true,
    })
  );
};
