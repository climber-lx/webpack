/*
    loader:  1.下载  2.使用（配置loader）
    plugins:    1.下载  2.引入  3.使用
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: "./src/index.js",
    // 输出文件
    output: {
        // 输出文件名
        filename: 'build.js',
        // 输出路径
        path: resolve(__dirname, 'build')
    },
    // loader配置
    module: {
        rules: [
            // 详细loader配置
            // 不同的文件配置不同的loader
            {}
        ]
    },
    // plugins 的配置
    plugins: [
        // 详细plugins的配置
        // html-webpack-plugin
        // 功能：默认会创建一个空的HTML，自定引入打包输出的所有资源（JS/CSS）
        // new HtmlWebpackPlugin(),
        // 需求：需要有结构的HTML文件
        // 复制 './src/indx.html' 文件，并自动打包输出的所有资源（JS/CSS）
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development"
}