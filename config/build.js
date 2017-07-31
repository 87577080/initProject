
var ora = require('ora');
var webpack = require('webpack');

var webpackProdConfig = require('./webpack.prod.conf');

var spinner = ora('开始生产环境构建');
spinner.start();

webpack(webpackProdConfig,function (err, stats) {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
});
