const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const ROOT = path.resolve(__dirname);
const DESTINATION = path.resolve(__dirname, "docs");

module.exports = (env) => {
  const isProd = env.production;
  const dev = !isProd;
  const mode = isProd ? "production" : "development";

  return {
    context: ROOT,
    mode,
    target: "web",
    entry: "./src/rtx.ts",
    output: {
      filename: "index.js",
      path: DESTINATION,
    },
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   use: "babel-loader",
        //   exclude: /node_modules/,
        // },
        {
          test: /\.ts$/,
          use: "ts-loader",
          //   exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    devServer: {
      //   hot: true,
      open: true,
      port: 3000,
    },
    devtool: dev && "inline-source-map",
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "*.wasm",
            context: path.resolve(__dirname, "node_modules/webrtx/dist"),
          },
        ],
      }),
    ],
  };
};
