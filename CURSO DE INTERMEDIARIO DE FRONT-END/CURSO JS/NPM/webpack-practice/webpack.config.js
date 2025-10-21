const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. Define o modo de desenvolvimento para remover o aviso.
  mode: 'development',

  // 2. Define o ponto de entrada da sua aplicação.
  entry: './src/index.js',

  // 3. Define as opções de saída do build.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Limpa o diretório 'dist' antes de cada novo build.
    clean: true,
  },

  // 4. Configura os loaders (para processar CSS, etc.).
  module: {
    rules: [
      {
        test: /\.css$/i, // Aplica esta regra a todos os arquivos .css
        use: ['style-loader', 'css-loader'], // Usa os loaders style-loader e css-loader
      },
    ],
  },

  // 5. Configura os plugins (para gerar o HTML, etc.).
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Usa o arquivo src/index.html como template
    }),
  ],
};
