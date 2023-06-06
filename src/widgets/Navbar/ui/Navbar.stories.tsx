import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [RouterDecorator, StoreDecorator({user:{authData:{}}})]
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    args: {},
    decorators:[ThemeDecorator()]
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const NoAuth: Story = {
    args: {},
    decorators: [StoreDecorator({user:{authData: undefined}})]
};



