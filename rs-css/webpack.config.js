const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                  { 
                    loader: 'sass-resources-loader',
                    options: {
                      resources: [
                        './src/style.scss'
                      ]
                    } }
                ],
              },
            {
                test: /\.html$/,
                use: [
                  { loader: 'html-loader' },
                ],
              },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|mp3|wav|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new EslintPlugin({ extensions: 'ts' }),
    ],
    devServer: {
        compress: true,
        port: 8080,
      }
};
