#webpack&&React&&es6开发环境配置


—>新建项目文件夹  MyApp
—>命令行cmd进入MyApp 已安装nodejs直接
        
    npm init

    控制台会输出一堆问题，帮助设置项目上的Node.js。第一个问题就是指定项目名称，不能包含大写字母，然后一路回车接受默认值

—>在下载安装依赖之前可以:

    npm install nrm -g
    nrm use taobao
    然后 nrm ls


—>安装React依赖

    npm install react react-dom --save

—>安装webpack全局和项目
    
    npm install webpack --save（项目）
    npm install webpack -g（全局）    

—>安装Babel （注意使用cnpm下载的包很多会报错）
    
    npm install babel-loader babel-preset-es2015 babel-preset-react --save
        

    安装完成后
    第一步：安指定Babel预置，方式有几种，这里修改package.json。
        {
          "name": "mytotallyawesomeapp",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "build": "webpack --progress --colors"
          },
          "author": "",
          "license": "ISC",
          "dependencies": {
            "babel-core": "^6.14.0",
            "babel-loader": "^6.2.5",
            "babel-preset-es2015": "^6.14.0",
            "babel-preset-react": "^6.11.1",
            "css-loader": "^0.24.0",
            "less": "^2.7.1",
            "less-loader": "^2.2.3",
            "node-sass": "^3.8.0",
            "react": "^15.3.1",
            "react-dom": "^15.3.1",
            "sass-loader": "^4.0.0",
            "style-loader": "^0.13.1",
            "webpack": "^1.13.2"
          },
          "babel": {
            "presets": [
              "es2015",
              "react"
            ]
          }
        }

     第二步：让webpack知道Babel，在webpack.config.js中
        module: {
            loaders: [{
                //include: DEV,
                // test: /\.jsx?$/,
                loader: "babel",
            }]
        },

—>安装sass
    
        npm install sass-loader node-sass --save

—>安装less

        npm install less-loader --save

—>安装style-loader
    
        npm install style-loader css-loader --save

—>在 MyApp 新建build(放置打包后文件)，src(放置源代码)文件夹；
    index.html，entry.js，webpack.config.js

**index.html 内容：**

    <!DOCTYPE html>
    <html>
        <head>
            <title>React! React! React!</title>
        </head>
        <body>
            <div id="container"></div>
            <script src="build/myCode.js"></script>
        </body>
    </html>

**webpack.config.js 内容：**

    var webpack = require("webpack");
    var path = require("path");
    var src = path.resolve(__dirname, "src");
    var OUTPUT = path.resolve(__dirname, "build");
    module.exports = {
        //入口文件
        entry: path.resolve(__dirname, './entry.js'),
        output: {
            path: OUTPUT, /*path.resolve(__dirname, "build"),*/
            filename: "myCode.js"
        },
        module: {
            loaders: [{
                // test: /\.jsx?$/,
                loader: "babel",
            }]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
    };

—>在src文件夹中新建index.jsx文件。定义组件
        
    import React from "react";
    import ReactDOM from "react-dom";
    // 定义组件
    var HelloWorld = React.createClass({
        render: function() {
            return (
                <h1>Hello, {this.props.name}!</h1>
            );
        }
    });
    module.exports = HelloWorld;

—>在entry.js中配置，渲染页面

    import React from "react";
    import ReactDOM from "react-dom";
    //引入组件
    var HelloWorld = require('./src/index');
    var Test = require('./src/test');
    //页面渲染
    ReactDOM.render(
        <div>
            <HelloWorld name="yangyh" />
            <Test/>
        </div>,
        document.getElementById我是张三('container')
    );

—>如果打包报错Run `npm rebuild node-sass` to build the binding for your current environment.全局安装

    npm install -g node-sass

#ES6模式


—>
—>
