const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: './src/app.js',
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }
      ]
    },
    plugins: [
        new CleanWebpackPlugin(['bin']),
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/app.html'
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'bin')
    }
  };
  
  module.exports = config;
