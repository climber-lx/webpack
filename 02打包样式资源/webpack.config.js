/*
    webpack.config.js   webpack的配置文件
        作用：指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置

        所有构建工具都是基于  nodejs 平台运行的~ 模块化默认采用 commonjs
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
    // webpack 配置
    // 入口起点
    entry: './src/index.js',
    // 输出
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
            {
                // 匹配哪些文件  正则
                test: /\.css$/,
                // 使用哪些 loader 进行处理
                use: [
                    // use 数组中loader执行顺序：从左到右，从上到下 依次执行
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成 commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                // 匹配哪些文件  正则
                test: /\.less$/,
                // 使用哪些 loader 进行处理
                use: [
                    // use 数组中loader执行顺序：从左到右，从上到下 依次执行
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成 commonjs模块加载js中，里面内容是样式字符串
                    'css-loader',
                    // 将less文件编译成css文件
                    'less-loader'
                ]
            }
        ]
    },
    // plugins 的配置
    plugins: [
        // 详细plugins的配置
    ],
    // 模式  开发模式和生产模式只能存在一个
    mode: 'development',
    // mode: 'production'
}
