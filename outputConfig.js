const { createWebpackProdConfig } = require("@craco/craco");

process.env.NODE_ENV = "production";
const cracoConfig = require("./craco.config.js");
const webpackConfig = createWebpackProdConfig(
  cracoConfig,
  {},
  { verbose: true }
);

console.log(webpackConfig);
