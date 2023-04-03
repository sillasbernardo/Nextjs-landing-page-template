const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	module: {
		rules: [
			// Bundles javascript files
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			// Bundles css and sass files
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			// Bundles image files
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			// Bundles font files
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		fallback: {
			fs: false
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
			filename: "index.html"
		}),
		new NodePolyfillPlugin(),
		new Dotenv(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/Assets/favicon.ico', to: 'favicon.ico' }
			]
		}),
		new CompressionPlugin({
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserWebpackPlugin()]
	},
	devServer: {
		hot: true,
		static: true,
		historyApiFallback: true,
		headers: {
			'Cache-Control': 'no-cache'
		}
	},
}