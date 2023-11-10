import type { Preview } from '@storybook/react';
import { StoreDecorator } from '../../src/shared/config/storybook/decorators/StoreDecorator';
import { Theme } from '../../src/shared/const/theme';

import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';

import i18n from './i18next.js';

const preview: Preview = {
    parameters: {
        i18n,
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        themes: {
            default: 'light',
            list: [
                { name: 'dark', class: Theme.DARK, color: '#361d32' },
                { name: 'light', class: Theme.LIGHT, color: '#f5f5f5' },
                { name: 'orange', class: Theme.ORANGE, color: '#d67815' },
            ],
        },
    },
    globals: {
        locale: 'uk',
        locales: {
            en: 'English',
            uk: 'Ukrainian',
        },
    },
};

export const decorators = [StyleDecorator, StoreDecorator({})];

export default preview;
