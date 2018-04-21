const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: './src/js/output-module.js',
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: "css-loader",
                fallback: "style-loader"
            })
        }
      ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
	watch: true
  };
  
  module.exports = config;