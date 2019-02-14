const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#00B31D",
      "@font-size-base": "15px",
      "@layout-body-background": "#FFFFFF",
      "@font-family":
        "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    },
    javascriptEnabled: true
  })(config, env);
  // do stuff with the webpack config...
  return config;
};
