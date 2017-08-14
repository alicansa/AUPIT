const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Webpack = require('webpack');

const isProduction = process.argv.indexOf('-p') > -1;

module.exports = {
	entry: {
		index: './app.js',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('css?sourceMap!postcss?sourceMap!sass?sourceMap')
		},
		{
			test: /\.(eot|svg|ttf|woff)$/,
			loader: 'file?name=fonts/[name].[ext]?v=[hash]'
		}]
	},
	plugins: [
		new ExtractTextPlugin("[name].bundle.css"),
		new Webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development')
			}
		}),
		new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
	],
	resolve: {
		modules: [
			path.resolve(__dirname + '/scripts'),
			path.resolve(__dirname + '/node_modules')
		]
	}
}