const base = require("./webpack.base.config")
const merge = require("webpack-merge")
const webpack = require("webpack")
const config = require('.././config/prod.config')

// Create multiple instances
// const extractCSS = new ExtractTextPlugin('css/app.css');

module.exports = merge(base, {
    // This contains additional production settings
    module: {
        rules: [{
            test: /\.css$/,
            loader: "css-loader"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process': {
                env: config
            }
        })
    ]
})
