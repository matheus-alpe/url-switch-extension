const path = require('path');
// const webpack = require('webpack');
// const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { VuetifyLoaderPlugin } = require('vuetify-loader');

module.exports = {
    mode: 'development',
    entry: {
        background: [path.resolve(__dirname, 'src', 'js', 'background.js')],
        app: [path.resolve(__dirname, 'src', 'app.js')],
    },
    output: {
        clean: true,
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        mangleWasmImports: true,
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@plugins': path.resolve(__dirname, 'src', 'plugins'),
            '@utils': path.resolve(__dirname, 'src', 'utils'),
        },
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
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    reactivityTransform: true,
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'pages', '**/*.html'),
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
        new VueLoaderPlugin(),
        new VuetifyLoaderPlugin(),
        // new webpack.DefinePlugin({
        //     __VUE_OPTIONS_API__: false,
        //     __VUE_PROD_DEVTOOLS__: false,
        // }),
    ],
};
