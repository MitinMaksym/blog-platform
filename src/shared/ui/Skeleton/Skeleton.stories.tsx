import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

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
};
export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        border: '50%',
    },
};
