const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        background: ['./src/js/background.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: ['[name]'],
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        mangleWasmImports: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
