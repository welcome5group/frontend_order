const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/posts",
    createProxyMiddleware({
      target: "13.124.33.178:8080",
      changeOrigin: true,
    })
  );
};
