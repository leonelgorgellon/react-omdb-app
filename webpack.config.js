const HtmlwebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');

const htmlPlugin = new HtmlwebpackPlugin({
  //donde va a encontrar el archivo html
  template: './src/index.html',
  //cual va a ser el nombre del archivo
  filename: 'index.html'
})

//aca ponemos para que webpack lea archivos js 
module.exports ={
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins:[htmlPlugin, new DotEnv]
};