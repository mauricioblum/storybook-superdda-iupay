const path = require("path");

module.exports = {
  stories: ['../storybook/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
          presets: [['react-app', { flow: false, typescript: true }]],
      },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: require.resolve('babel-loader'),
      include: path.resolve(__dirname, '../', 'node_modules/react-native-switch/'),
      options: {
        presets: [['react-app', { flow: true, typescript: false }]],
      },
    });
    config.resolve.extensions.push('.js', '.jsx');
    return config;
  },
  };
