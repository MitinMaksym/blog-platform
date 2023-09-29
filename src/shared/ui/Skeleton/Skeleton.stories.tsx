import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    args: {},
    parameters: {
        loki: { skip: true },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Primary: Story = {
    args: {
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
    args: {
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
    args: {
        width: 100,
        height: 100,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
