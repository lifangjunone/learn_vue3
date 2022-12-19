const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpaackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]_[hash:8][ext]",
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      // plugins: [
      // "@babel/plugin-transform-arrow-functions",
      // "@babel/plugin-transform-block-scoping",
      // ],
      //     },
      //   },
      // },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpaackPlugin()],
};
