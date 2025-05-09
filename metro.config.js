const {getDefaultConfig} = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add react-native-svg-transformer
config.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer',
);

// Modify assetExts and sourceExts to support SVGs
config.resolver.assetExts = config.resolver.assetExts.filter(
  ext => ext !== 'svg',
);
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

module.exports = config;
``;
