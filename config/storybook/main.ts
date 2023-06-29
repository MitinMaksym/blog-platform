import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        'storybook-react-i18next',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-react-router-v6'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config: Configuration) => {
       
        config?.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'));
        config?.resolve?.extensions?.push('.ts', '.tsx');
    
        if(config.module) {
            // eslint-disable-next-line no-param-reassign
            config.module.rules = config.module?.rules?.map((rule) => {
                if (/svg/.test((rule as RuleSetRule).test as string)) {
                    return { ...rule as RuleSetRule, exclude: /\.svg$/i };
                }
                return rule;
            });
        }
        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config?.module?.rules?.push(buildCssLoader(true));

        config.plugins?.push( new DefinePlugin({
            __IS_DEV__: true,
            __PROJECT__: JSON.stringify('storybook'),
        }),);

        return config;
    },
};
export default config;
