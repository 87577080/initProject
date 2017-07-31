var path = require('path');

var webpack = require('webpack');
var merge = require('webpack-merge');

var config = require('./config');
var webpackBaseConfig = require('./webpack.base.config').webpackConfig;
var CleanPlugin = require('clean-webpack-plugin');
var glob = require('glob');

//生产环境webpack配置
var webpackProdConfig = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new CleanPlugin(config.dest)
    ]
};

module.exports = merge(webpackBaseConfig, webpackProdConfig);