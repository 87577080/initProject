import Koa from 'koa';
import koaWebpackDevMiddleware from 'koa-webpack-dev-middleware';
import koaWebpackHotMiddleware from 'koa-webpack-hot-middleware';
import proxy from 'http-proxy-middleware';
import convert from 'koa-convert';
import connect from 'koa-connect';
import webpack from 'webpack';
import webpackDevConfig from '../config/webpack.dev.config';
import config from '../config/config';

var app = new Koa();

//代理请求过滤，非静态资源的请求，都通过代理
let proxyFilter = function (pathname, req) {
    return !/\.((png|jpe?g|gif)(\?.*)?)|html|css|js|json$/.test(pathname);
};

var compiler = webpack(webpackDevConfig);
app.use(convert(koaWebpackDevMiddleware(compiler, {
    hot: true,
    stats: {
        colors: true,
        chunks: false
    }
})));
app.use(convert(koaWebpackHotMiddleware(compiler,{
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
})));

app.use(connect(proxy(proxyFilter, {
        target: config.dev.proxyHost
    }
)));

app.listen(config.dev.port);
