const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src', 'template.html')
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource"
      },
    ]
  }
};
