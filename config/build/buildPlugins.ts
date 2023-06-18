import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin}  from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin  from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyze,
    apiUrl,
    project
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins =  [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
    ];

    if(isDev){
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if(analyze){
        plugins.push(new BundleAnalyzerPlugin({analyzerMode: 'server'}));

    }

    return plugins;
}
