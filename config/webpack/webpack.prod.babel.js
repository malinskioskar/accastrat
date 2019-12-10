import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';

module.exports = {
    mode: 'production',
    entry: ['./src/index.js'],
    output: {
        filename: 'acca-strategy.bundle.js',
        chunkFilename: 'acca-strategy.js',
        path: paths.outputPath,
        library: 'accaStrategy',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    plugins: [
        new CleanWebpackPlugin(),
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
