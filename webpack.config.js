const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // If it's CSS, process using CSS loaders
            { test: /\.css/i, use: ['style-loader', 'css-loader'] },
            // If it's .jpg, .png or .gif, process as a resource
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
            },

        ]
    },
}
