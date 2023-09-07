const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = function () {
  return {
    mode: "development",
    entry: {
      main: {
        import: "./src/main.ts",
      },
    },
    output: {
      path: path.join(__dirname, "../../devDist"),
      filename: "[name].js",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "../../public"),
      },
      port: 1314,
      open: true,
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@config": path.resolve(__dirname, "config/"),
        "@package": path.resolve(__dirname, "src/package/"),
      },
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.([cm]?ts)$/,
              exclude: /(node_modules)/,
              use: ["babel-loader", "ts-loader"],
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../../public/index.html"),
        filename: "index.html",
      }),
      new ESLintPlugin()
    ],
  };
};
