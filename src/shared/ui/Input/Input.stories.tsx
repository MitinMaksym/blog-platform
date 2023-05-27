import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import {  Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        label: 'Password'
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {},
};

export const WithLabel: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};