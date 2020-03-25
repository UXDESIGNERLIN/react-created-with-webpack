var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    //path: path.resolve(__dirname, "build"),
    //publicPath: "/",
    //filename: "index_bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./build"
    //publicPath: "http://localhost:8081/react-created-with-webpack/dist/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "app/index.html"
      template: path.resolve("app/index.html")
    })
  ]
};
