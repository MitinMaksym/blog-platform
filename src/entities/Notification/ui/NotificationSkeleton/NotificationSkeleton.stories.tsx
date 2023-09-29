import type { Meta, StoryObj } from '@storybook/react';
import { NotificationSkeleton } from './NotificationSkeleton';

const meta: Meta<typeof NotificationSkeleton> = {
    title: 'entities/Notification/NotificationSkeleton',
    component: NotificationSkeleton,
    tags: ['autodocs'],
    args: {},
    parameters: {
        loki: {
            skip: true,
        },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationSkeleton>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
