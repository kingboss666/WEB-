const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const webpackMerge = require("webpack-merge");
const configMode = (mode) => {
	return require(`./build-utils/webpack-${mode}.js`);
}

module.exports = ({mode}) => {
	return webpackMerge({
		mode,
		entry: "./src/index2.js",
		plugins: [
			new htmlWebpackPlugin({
				template: "./index.html",
			}),
			new webpack.ProgressPlugin()
		]
	}, configMode(mode))
}
