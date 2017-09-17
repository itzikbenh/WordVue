
const path            = require('path');
const webpack         = require('webpack');
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin');

const config = {
	watch: true,
	entry: {
		app: './assets/js/app/app.js',
		vendor: ['vue']
	},
	output: {
		filename: '[name].js',
        path: path.resolve(__dirname, 'public/js/'),
        publicPath: './public'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		]
	},
	resolve: {
		extensions: ['.js'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        })
	]
};

//If true JS files will be minified
if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new UglifyJSPlugin({
			compress: {
				warnings: false
			}
		})
	);
	config.watch = false;
}

module.exports = config;
