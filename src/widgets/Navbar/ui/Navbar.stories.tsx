import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'shared/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
    },
    decorators: [RouterDecorator]
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {
    args: {},

};
export const NavbarDark: Story = {
    args: {},
};



