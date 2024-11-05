/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
require('webpack-dev-server');

module.exports = (env) => {
	const config = {
		mode: env.MODE ?? 'development',
		entry: path.resolve(__dirname, 'src', 'main.tsx'),
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: 'ts-loader',
							options: { configFile: 'tsconfig.json' },
						},
					],
					exclude: /node_modules/,
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
				},
			],
		},
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, 'dist'),
			clean: true,
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src/'),
			},
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [
			env.MODE === 'development' &&
				new HtmlWebpackPlugin({
					template: path.resolve(__dirname, 'public', 'index.html'),
					favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
				}),
			env.MODE === 'development' && new ReactRefreshWebpackPlugin(),
		],
		devtool: env.MODE === 'development' && 'inline-source-map',
		devServer: {
			historyApiFallback: true,
			port: env.PORT || 3000,
			open: true,
			hot: true,
		},
	};
	return config;
};
