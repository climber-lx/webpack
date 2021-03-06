/*

    index.js: webpack 入口起点文件

    1.运行指令：
        开发环境： webpack ./src/index.js -o ./build --mode=development
            webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build 
            整体打包环境，是开发环境
        生产环境：  webpack ./src/index.js -o ./build --mode=production
             webpack会以 ./src/index.js 为入口文件开始打包，打包输出到 ./build 
            整体打包环境，是生产环境
    2. 结论：
        1.webpack 能处理 js/ json 资源，不能处理 css/img 等其他资源
        2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
        3.生产环境比开发环境多一个压缩js代码
 
*/

import data from './index.json';
console.log(data);

// import './index.css';

function add(x, y) {
    return x + y
}

console.log(add(1, 2));