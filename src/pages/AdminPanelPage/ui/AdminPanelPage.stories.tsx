import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    tags: ['autodocs'],
    argTypes: {},
    decorators:[withRouter, StoreDecorator({page: {scroll:{}}})]
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Light: Story = {
    args: {},
    decorators:[ThemeDecorator()]

};
export const Dark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};