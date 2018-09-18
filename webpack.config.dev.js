const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry:{
        index: [
            '@babel/polyfill',
            'webpack-hot-middleware/client?reload=true', 
            './src/index.tsx'
        ]
    },
    target: 'web', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'json', '.pcss']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//HMR
        new webpack.NamedModulesPlugin(),//print filename
        new HtmlWebpackPlugin({
            title: 'Trouble',
            inject: 'body',
            hash: true,
            chunks: ['index'],
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
                removeComment: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|sx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.(scss|css|pcss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            localIdentName: '[name]__[local]',
                            sourceMap: true,
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline'
                        }
                    },
                    
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