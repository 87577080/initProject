# 第三方M站交易前端页面

项目采用前后端分离方式开发

使用 `vue`作为前端渲染层，`webpack`打包，`koa`作为开发时server及异步接口代理

下载
```
git clone 
```

安装依赖
```
npm i
```

内置命令
```
npm run dev     开发
npm run build   构建
```

## 目录结构

```
├── README.md
├── bin                             --可执行文件目录
│   └── server.js
├── config                          --各种配置
│   ├── build.js                    --构建入口文件
│   ├── config.js                   --项目基础配置
│   ├── webpack.base.config.js      --webpack基础配置
│   ├── webpack.dev.config.js       --webpack开发配置
│   └── webpack.prod.conf.js        --webpack线上配置   
├── dest                            --打包构建后目录
│   ├── common.js
│   ├── css
│   │   └── pages
│   └── pages
│       ├── common
│       ├── home
│       └── search
├── package.json                    --项目描述文件
└── src                             --源码目录
    ├── assets                      --静态资源目录
    │   ├── common.css               
    │   ├── fonts
    │   └── imgs
    ├── components                  --组件
    │   └── button
    ├── modules                     --模块
    │   └── projectList
    └── pages                       --页面
        ├── common
        ├── home
        └── search
```