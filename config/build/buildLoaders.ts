import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgloader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelTsxCodeLoader = buildBabelLoader({...options, isTSX: true});
    const babelCodeLoader = buildBabelLoader(options);

    return [babelCodeLoader, babelTsxCodeLoader, buildCssLoader(isDev), svgloader, fileLoader];
}
