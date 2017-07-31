var path = require('path');

var config = {
    //项目根目录
    root: path.resolve(__dirname, '../'),
    //源代码目录
    src: path.resolve(__dirname, '..', 'src/'),
    //打包编译后的目录
    dest: path.resolve(__dirname,'..', 'dest/'),

    dev: {
        //端口
        port: 4000,
        //代理后端服务的地址，需要为绝对地址
        proxyHost: 'http://127.0.0.1'
    }
};

module.exports = config;
