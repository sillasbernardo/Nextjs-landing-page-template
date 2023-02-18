const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const path = require('path');

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
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
			filename: "index.html"
		})
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserWebpackPlugin()]
	},
	devServer: {
		hot: true,
		historyApiFallback: true,
		headers: {
			'Cache-Control': 'no-cache'
		}
	}
}