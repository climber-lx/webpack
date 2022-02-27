const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
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
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|svg)$/,
                // 使用一个loader
                // 下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                    // 图片大小小于8kb，就会被base64处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积会更大（文件请求速度更慢）
                    limit: 8 * 1024,
                    // 问题：因为 url-loader 默认使用es6模块化解析，而html-loader引入图片是commonjs
                    // 解析时会出问题：[object Module]
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                    //图片进行重命名
                    // [hash:10]取图片的hash的前10位
                    // [ext]取文件原来的扩展名
                    name: '[hash:10].[ext]'
                },
                // 因为webpack5对于图片打包官方建议使用asset module 替换loader
                // 问题：打包后有资源但是图片不显示
                // 解决：如果还想使用loader，可以加： type: 'javascript/auto'
                type: 'javascript/auto',
            },
            // {
            //     // 处理图片资源
            //     test: /\.(jpg|png|svg)$/,
            //     // 官方建议直接使用 asset module 替换loader，就放弃loader使用 type: 'asset/resource'
            //     // type: 'asset/resource'
            //     type: 'asset/resource'
            // },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被 url-loader 进行处理）
                loader: 'html-loader'
            }
        ]
    },
    // plugins 的配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development"
}