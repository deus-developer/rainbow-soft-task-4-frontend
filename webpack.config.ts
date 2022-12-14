const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "production",
    entry: './src/index.tsx', // Changed the entry file name
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    module: {
    rules: [
        {   
            exclude: "/node_modules/",
            test: '/\.css$/',
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(js|ts)x?$/,    // add |ts
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
    ],
    },
    resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'], // add .tsx, .ts
    },
}