var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
    //filename: "index_bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
    // publicPath: "/react-created-with-webpack/dist/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      //template: "app/index.html"
    })
  ]
};
