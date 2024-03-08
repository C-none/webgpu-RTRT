const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    entry: "./src/bistro_gl.ts",
    output: {
      filename: "bundle.js",
      path: DESTINATION,
      // publicPath: "./public/",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
        },
        {
          test: /\.glsl$/,
          use: "webpack-glsl-loader",
        },
      ],
    },
    stats: {
      warningsFilter: ["./node_modules"],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    devServer: {
      open: true,
    },
    devtool: dev && "inline-source-map",
    plugins: [
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
          {
            from: path.resolve(__dirname, "public"),
            to: DESTINATION,
          },
        ],
      }),
    ],
  };
};
