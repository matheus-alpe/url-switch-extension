const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        background: [path.resolve(__dirname, 'src', 'js', 'background.js')],
        popup: [path.resolve(__dirname, 'src', 'js', 'popup.js')],
        app: [path.resolve(__dirname, 'src', 'app.js')],
        app: ['./src/app.js'],
    },
    output: {
        clean: true,
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
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'popup.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer()],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules'],
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'pages', '**/*'),
                    to: path.resolve(__dirname, 'dist', '[name][ext]'),
                },
                {
                    from: path.resolve(__dirname, 'src', 'assets', '**/*'),
                    to: path.resolve(__dirname, 'dist', '[name][ext]'),
                },
                {
                    from: path.resolve(__dirname, 'src', 'manifest.json'),
                    to: path.resolve(__dirname, 'dist', '[name][ext]'),
                },
            ],
        }),
    ],
};
