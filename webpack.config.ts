const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "production",
    entry: './index.tsx', // Changed the entry file name
    output: {
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '../public/index.html'
        }),
    ],
    module: {
    rules: [
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"],
        },
    ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'], // add .tsx, .ts
    },
}