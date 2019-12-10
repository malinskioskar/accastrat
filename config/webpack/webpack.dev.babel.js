import webpack from 'webpack';
import Jarvis from 'webpack-jarvis';
import TerserPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: 'acca-strategy.bundle.js',
        path: paths.outputPath,
        library: 'accaStrategy',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 20000000,
        maxEntrypointSize: 8500000,
        assetFilter: (assetFilename) => (
            assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
        ),
    },
    devServer: {
        contentBase: paths.outputPath,
        compress: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Jarvis({
            port: 3000,
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
