/* global __dirname, process */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SoundNotificationPlugin = require('sound-notification-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.argv.indexOf('--prod') !== -1;

const outputPath = path.resolve(__dirname, './dist');
const srcDir = path.resolve(__dirname, './src');
const servePath = path.resolve(__dirname, './.tmp');

var webpackConfig = {
    debug: true,
    entry: {
        app: path.join(srcDir, 'index.js')
    },
    //devtool: 'eval', //sourcemap, eval ...
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    module: {

        noParse: '/node_modules/',

        loaders: [

            // Src JS
            {
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel?presets[]=es2015&cacheDirectory'],
                include: [srcDir]
            },

            //CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },

            // LESS
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },

            // HTML Cached (concatenet in js)
            {
                test: /template.html$/,
                loader: 'ngtemplate?relativeTo=' + srcDir + '/!html'
            },

            // HTML
            {
                test: /template-async.html$/,
                loader: 'file-loader?name=tpls/[name].[ext]'
            },

            // Fonts
            {
                test: /\.(woff|woff2|svg|ttf|eot)([\?]?.*)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },

            // Static Imgs
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ico$/,
                loader: 'file-loader?name=imgs/[name].[ext]'
            },

            // json
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        alias: {
            'npm': path.resolve(__dirname, 'node_modules'),
            'bower': path.resolve(__dirname, 'bower_components')
        }
    },
    plugins: [

        //Remove duplicates
        new webpack.optimize.DedupePlugin(),

        // Separete vendors to a vendors.js file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: function (module) {
                return module.resource && module.resource.indexOf(srcDir) === -1;
            }
        }),

        // Creates index.html
        new HtmlWebpackPlugin({
            title: 'Pedro&Bino',
            pkg: require('./package.json'),
            template: path.join(srcDir, 'index.html'),
            inject: true,
            minify: { collapseWhitespace: isProd }
        }),

        // Extracts css to a contained file
        new ExtractTextPlugin('app.css'),

        // Sound notification
        new SoundNotificationPlugin()

    ],
    devServer: {
        contentBase: servePath,
        noInfo: false, //  --no-info option
        hot: false
    }
};

if (isProd) {
    webpackConfig.debug = false;
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true
            // drop_console: true
        },
        output: {
            comments: false
        }
    }));
}

module.exports = webpackConfig;
