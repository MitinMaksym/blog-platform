import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [RouterDecorator,]

};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    args: {},
    decorators:[ThemeDecorator(), StoreDecorator({})]
};
export const Dark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK), StoreDecorator({})]
};
export const Auth: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK), StoreDecorator({user:{authData:{}}})]
};



