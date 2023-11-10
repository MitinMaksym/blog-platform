import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        label: 'Password',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {},
};
export const ReadOnly: Story = {
    args: {
        readOnly: true,
    },
};

export const WithLabel: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
