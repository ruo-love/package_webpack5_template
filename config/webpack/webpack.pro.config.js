const path = require("path");

module.exports = function () {

  return {
    mode: "production",
    entry: {
      main: {
        import: "./src/main.ts",
      },
    },
    output: {
      path: path.join(__dirname, "../../proDist"),
      filename: "[name].js",
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
  };
};
