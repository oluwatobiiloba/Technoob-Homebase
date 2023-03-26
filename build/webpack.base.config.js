const path = require('path')
const {
    VueLoaderPlugin
} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


module.exports = {
    mode: "development",
    entry: "./client/app.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "assets/js/[hash:10].js"
    },
    performance: {
        maxEntrypointSize: 3072000,
        maxAssetSize: 4096000
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: 'index.html'
        }),
        new ExtractCssChunks({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'assets/css/[hash:10].css',
        }),
    ],
    module: {
        rules: [{
                //test: /\.(scss|sass)(\?.*)?$/,
                test: /\.((c|sa|sc)ss)$/i,
                use: [{
                        loader: ExtractCssChunks.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../../',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    // "vue-style-loader", // creates style nodes from JS strings
                    "css-loader",
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: process.env.NODE_ENV === 'production',
                    loaders: {}
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: './assets/img/[hash:5].[ext]',
                    esModule: false,
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: './assets/media/[hash:5].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: './assets/fonts/[hash:5].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve('./client'),
            'style': path.resolve('./client/assets/css'),
            'script': path.resolve('./client/assets/js'),
            'image': path.resolve('./client/assets/img')
        },
        extensions: ['.js', '.vue', '.css']
    }
}
