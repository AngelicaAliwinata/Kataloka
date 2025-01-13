const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind(() => {
  const config = getDefaultConfig(__dirname);

  // Destructure transformer and resolver for modification
  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"), // Use the SVG transformer
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"), // Exclude 'svg' from assetExts
    sourceExts: [...resolver.sourceExts, "svg"], // Include 'svg' in sourceExts
  };

  return config;
}, { input: "./global.css" });
