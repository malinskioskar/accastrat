import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';
import rules from './rules';

module.exports = {
    entry: paths.entryPath,
    module: {
        rules,
    },
    output: {
        filename: 'acca-strategy.bundle.js',
        path: paths.outputPath,
        library: 'accaStrategy',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.scss', '.css'],
        alias: {
            '_variables.sass': paths.bulmaPath,
          },
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css',
          }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    devtool: 'source-map',
};
