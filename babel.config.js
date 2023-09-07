module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          ie: "9",
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      },
    ],
    "@babel/preset-typescript",
  ];
  const plugins = [["@babel/plugin-transform-arrow-functions", { spec: true }]];
  return {
    presets,
    plugins,
  };
};
