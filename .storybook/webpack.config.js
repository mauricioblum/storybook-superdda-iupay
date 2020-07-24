module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          // publicPath: 'https://cdn.example.com/', // uncomment to override webpack public path
          // esModule: true
          scalings: { '@2x': 2, '@3x': 3 },
        },
        loader: 'react-native-web-image-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // Maps the 'react-native' import to 'react-native-web'.
    alias: {
      'react-native': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
    },
    extensions: ['.web.js', '.js'],
  },
};
