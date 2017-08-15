const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    entry: {
        app: './index.tsx',
        appStyles: './css/main.css',
        vendor: [
            'react',
            'react-dom'
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css'
        ]
    },
    output: {
        path: path.join(basePath, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader", options: {
                            sourceMap: true
                        }
                        }, {
                            loader: "sass-loader", options: {
                                sourceMap: true
                            }
                        }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(gif|jpg|JPG|png)$/,
                include: path.join(basePath, "src/images"),
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 1616,
        host: '0.0.0.0',
        noInfo: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new ExtractTextPlugin({
            filename: "[name].bundle.css",
            disable: process.env.NODE_ENV === "development"
        })
    ]
};
