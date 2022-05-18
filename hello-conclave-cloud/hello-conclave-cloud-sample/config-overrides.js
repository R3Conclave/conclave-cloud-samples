module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "stream": require.resolve("stream-browserify"),
    "crypto": require.resolve("crypto-browserify"),
  });
  config.resolve.fallback = fallback;
  return config;
};