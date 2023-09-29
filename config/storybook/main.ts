import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        'storybook-addon-mock',
        'storybook-react-i18next',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-react-router-v6',
        'storybook-addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config: Configuration) => {
        if (config.resolve?.alias) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../../src'),
            };
        }

        config?.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'));
        config?.resolve?.extensions?.push('.ts', '.tsx');

        if (config.module) {
            // eslint-disable-next-line no-param-reassign
            config.module.rules = config.module?.rules?.map((rule) => {
                if (/svg/.test((rule as RuleSetRule).test as string)) {
                    return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
                }
                return rule;
            });
        }
        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config?.module?.rules?.push(buildCssLoader(true));

        config.plugins?.push(
            new DefinePlugin({
                __IS_DEV__: true,
                __PROJECT__: JSON.stringify('storybook'),
                __API__: JSON.stringify(process.env.API_URL),
            }),
        );

        return config;
    },
};
export default config;
