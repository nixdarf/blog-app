const { addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = function override(config) {
  return addWebpackAlias({
    "@assets": path.resolve(__dirname, "src/assets/"),
    "@pages": path.resolve(__dirname, "src/components/pages/"),
    "@UI": path.resolve(__dirname, "src/components/UI/"),
    "@store": path.resolve(__dirname, "src/store/"),
    "@theme": path.resolve(__dirname, "src/theme/"),
    "@utils": path.resolve(__dirname, "src/utils/"),
  })(config);
};
