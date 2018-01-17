const path = require('path');

module.exports = {
    context: path.resolve(__dirname, "./js"),
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 8080
    }
}
