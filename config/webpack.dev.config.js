var path = require('path');

var webpack = require('webpack');
var merge = require('webpack-merge');
var glob = require('glob');

var baseWebpackConfig = require('./webpack.base.config').webpackConfig;
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

//修改entry，使用webpack-hot-middleware 实现自动刷新
Object.keys(baseWebpackConfig.entry).forEach(item=>{
    baseWebpackConfig.entry[item] = [baseWebpackConfig.entry[item],hotMiddlewareScript];
});

module.exports = merge(baseWebpackConfig,{
    devtool: '#eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
});

