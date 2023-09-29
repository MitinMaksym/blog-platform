import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const notification = {
    id: '1',
    title: 'Notification',
    description: 'Description',
};

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    tags: ['autodocs'],
    args: {
        item: notification,
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
