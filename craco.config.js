const { whenProd } = require("@craco/craco");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  webpack: {
    plugins: {
      add: [
        ...whenProd(
          () => [
            // None of these get added correctly
            new HtmlWebpackPlugin(),
            new CspHtmlWebpackPlugin(),
          ],
          []
        ),
      ],
    },
  },
};
