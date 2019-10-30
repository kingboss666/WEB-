const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
	return {
		mode,
		devtool: "eval-source-map",
		entry: "./src/index.js",
		output: {
			path: __dirname + "/dist",
			filename: "index.js"
		},
		module: {
			rules: [{
				test: /\.scss/,
				use: [{
					loader: MiniCssExtractPlugin.loader
				}, "css-loader", "sass-loader"]
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-syntax-dynamic-import"]
					}
				}]
			}, {
				test: /\.jpe?g$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 5000  //单位是b
					}
				}]
			},
			{
				test: /\.mp3$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 5000  //单位是b
					}
				}]
			}]
		},
		plugins: [
			new htmlWebpackPlugin({
				template: "./index_template.html",
			}),
			new webpack.ProgressPlugin(),
			new MiniCssExtractPlugin()
		]
	}
}
