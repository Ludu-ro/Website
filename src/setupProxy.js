const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(createProxyMiddleware("/api", {
    target: "https://cikg9yib8j.execute-api.us-east-1.amazonaws.com/beta",
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  }));
};