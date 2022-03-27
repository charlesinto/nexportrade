const path = require("path");

const CracoLessPlugin = require("craco-less");
const sassResourcesLoader = require("craco-sass-resources-loader");

module.exports = {
  webpack: {
    alias: {
      assets: path.resolve(__dirname, "src/assets/"),
      common: path.resolve(__dirname, "src/common/"),
      components: path.resolve(__dirname, "src/components"),
      hooks: path.resolve(__dirname, "src/hooks"),
      utils: path.resolve(__dirname, "src/routes"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#000000;" },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: sassResourcesLoader,
      options: {
        resources: "./src/global.scss",
      },
    },
  ],
};
