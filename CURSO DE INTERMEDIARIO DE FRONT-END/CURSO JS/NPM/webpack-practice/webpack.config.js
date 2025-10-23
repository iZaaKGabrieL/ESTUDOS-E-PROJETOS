const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'C:\Users\Isaac Gabriel\Documents\ESTUDOS-E-PROJETOS-2\ESTUDOS-E-PROJETOS\CURSO DE INTERMEDIARIO DE FRONT-END\CURSO JS\NPM\webpack-practice\src\template.html',
      filename: 'index.html',
    }),
  ],
};
