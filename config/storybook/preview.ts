
import type { Preview } from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/decorators/StyleDecorator";

import i18n from './i18next.js';

const preview: Preview = {
    parameters: {
        i18n,
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    globals:{
        locale: 'ua',
        locales: {
            en: 'English',
            ua: 'Ukrainian',
        },
    }
};

export const decorators = [StyleDecorator];

export default preview;
