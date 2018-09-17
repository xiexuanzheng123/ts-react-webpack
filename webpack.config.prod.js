const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const GLOBALS = {
//     'process.env.NODE_ENV': JSON.stringify('production')
// };
module.exports = {
    mode: 'production',
    entry: {
        index: [
            '@babel/polyfill',
            './src/index.tsx'
        ]
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new UglifyJSPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin(),
        new MiniCssExtractPlugin({
            //should be used only production without style-loader
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'trouble',
            minify: {
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            hash: true,
            chunks: ['index'],
            filename: 'index.html',
            template: './src/index.html'
        })

    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'json']
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            name: true,
            cacheGroups: {
                verndors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                        loader: 'babel-loader',
                        options: {
                            sourceMap: true
                        }
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                }
            },
            {
                test: /\.pcss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it use publicPath in webpackOptions.output
                          publicPath: '../'
                        }
                      },
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                            importLoaders: 1,
                            localIdentName: '[name]__[local]',
                            sourceMap: true,
                            modules: true
                        }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
        ]
    }
};