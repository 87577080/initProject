//原始模块
var path = require('path');

//第三方模块
var webpack = require('webpack');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//参见 https://zengxiaotao.github.io/2016/10/26/html-webpack-plugin-%E7%94%A8%E6%B3%95/
// 重点关注chunks 选项，多入口entry时必须要用到的
var HtmlWebpackPlugin = require('html-webpack-plugin');

//内部自定义模块
var config = require('./config');

/**
 * 获取实例对象
 * @param globPath    glob路径
 * @param basepath    基础路径，截取该路径后的文字
 * @returns
 *  {
 *
 *  }
 */
function getEntry(globPath,basePath) {
    var entries = {},
        dirname,basename, extname, pathname;
    glob.sync(globPath).forEach(function (entry) {
        extname = path.extname(entry);              //文件后缀，包含.
        basename = path.basename(entry, extname);   //不带后缀和路径的文件名
        dirname = path.dirname(entry);              //文件夹路径，不包含文件名
        pathname = path.normalize(path.join(dirname,basename));    //不包含文件后缀的文件全路径
        basePath = path.normalize(basePath);            //基础路径
        if(pathname.startsWith(basePath)){
            pathname = pathname.substring(basePath.length);
        }
        entries[pathname] = entry;
    });
    return entries;
}

/**
 * webpack的chunk文件，本例中得到的结果如下
 *
 * {
 *  'js/home/index': './src/js/home/index.js',
 *   'js/index': './src/js/index.js',
 *   'js/search/index': './src/js/search/index.js'
 * }
 */
var entries = getEntry('./src/js/**/*.js', './src/');

//webpack公共模块提取时需要用到的的变量
var chunks = Object.keys(entries);

var webpackBaseConfig = {
    entry : entries,
    output: {
        path: config.dest,
        filename: '[name].js'
    },
    resolve: {
        extensions: [".js", ".json", ".less", ".vue"],
        alias: {
            //vue  编译后有不同版本,es module方式必须使用 vue.esm.js，参考 https://www.mmxiaowu.com/article/58482558d4352863efb55475
            'vue': path.resolve(__dirname, '../node_modules/vue/dist/vue.esm.js'),
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'components': path.resolve(__dirname, '../src/components'),
            'modules': path.resolve(__dirname, '../src/modules')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.tpl$/,
                use: ['vue-template-compiler-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!postcss-loader'
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader!postcss-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: ['url-loader']
            },
            {
                test: /\.ejs$/,
                use: ['ejs-compiled-loader']
            }
        ]
    },
    plugins: [
        // 提取公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',         // 公共模块的名称
            chunks: chunks,         // chunks是需要提取的模块，取自webpack.entry 的
            minChunks: chunks.length
        }),

        // 配置提取出的样式文件
        new ExtractTextPlugin('css/[name].css')
    ]
};

//提取ejs模板到html
var ejsPages = getEntry('./src/pages/**/*.ejs','./src/');

for(let key in ejsPages){
    if(!ejsPages.hasOwnProperty(key)) continue;
    let item = ejsPages[key];
    var conf = {
        filename: key + '.html',
        template: item,
        hash: true,
        inject: true
    };
    //通过chunks 指定注入的js文件名，chunks的名字即为webpack配置中的entry字段对象的 key 名
    //因为entry中key是以 js 开头，ejs模板是以 pages 开头，所以稍微做个转换
    conf.chunks = ['common', key.replace(/^pages/,'js')];
    webpackBaseConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports.webpackConfig = webpackBaseConfig;
