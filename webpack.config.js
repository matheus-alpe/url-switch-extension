const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: {
        background: ['./src/js/background.js'],
        popup: ['./src/js/popup.js'],
        app: ['./src/js/app.js'],
        sass: ['./src/styles/app.scss']
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
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'bundle.css',
                    },
                  },
                  { loader: 'extract-loader' },
                  { loader: 'css-loader' },
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [
                          autoprefixer()
                        ]
                      }
                    } 
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      // Prefer Dart Sass
                      implementation: require('sass'),
        
                      // See https://github.com/webpack-contrib/sass-loader/issues/804
                      webpackImporter: false,
                      sassOptions: {
                        includePaths: ['./node_modules']
                      },
                    },
                  },
                ]
            }
        ],
    },
};
