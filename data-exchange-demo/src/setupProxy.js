const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/projects/_/keys/public",
    createProxyMiddleware({
      target: "https://api.conclave.cloud",
      changeOrigin: true,
      secure: false,
    })
  );
};
