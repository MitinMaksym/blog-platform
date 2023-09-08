import { babelRemovePropsPlugin } from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean
}

export const buildBabelLoader = ({ isDev, isTSX = false }: BuildBabelLoaderProps) => ({
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            presets: [
                [
                    '@babel/preset-typescript',
                    {
                        isTSX,
                        allExtensions: isTSX,
                    },
                ],
            ],
            plugins: [
                '@babel/plugin-transform-runtime',
                isTSX &&
          !isDev && [
                    babelRemovePropsPlugin(),
                    {
                        props: ['data-testid'],
                    },
                ],
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});