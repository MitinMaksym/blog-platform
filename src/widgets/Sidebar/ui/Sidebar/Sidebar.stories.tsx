import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'shared/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [RouterDecorator]

};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLight: Story = {
    args: {},
};
export const SidebarDark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};



