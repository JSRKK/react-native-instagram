module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [".ios.js", ".android.js", ".js", ".json"],
        alias: {
          'src': './src',
          'assets': './src/assets',
          'components': './src/components',
          'screens': './src/screens'
        },
      },
    ],
  ],
};
