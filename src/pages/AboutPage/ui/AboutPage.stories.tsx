import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import   AboutPage  from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    tags: ['autodocs'],
    argTypes: {},
    decorators:[withRouter, StoreDecorator({page: {scroll:{}}})]
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    args: {},
    decorators:[ThemeDecorator()]
};
export const Dark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};