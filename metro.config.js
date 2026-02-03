const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = path.resolve(__dirname);

module.exports = async () => {
  const config = await getDefaultConfig(projectRoot);
  config.server = {
    ...config.server,
    entryPoint: "./entry.js",
  };
  return config;
};
