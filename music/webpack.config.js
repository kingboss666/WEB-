const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const configMode = (mode) => {
	return require(`./build-utils/webpack-${mode}.js`);
}

module.exports = ({mode}) => {
	return {
		mode,
		entry: "./src/index.js",
		output: {
			path: __dirname + "/dist",
			filename: "index.js"
		},
		plugins: [
			new htmlWebpackPlugin({
				template: "./index_template.html",
			}),
			new webpack.ProgressPlugin()
		]
	}
}
