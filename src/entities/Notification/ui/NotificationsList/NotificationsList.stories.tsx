import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Notification } from '../../model/types/notification';
import { NotificationsList } from './NotificationsList';

const mockResponse: Array<Notification> = [
    {
        id: '1',
        title: 'Notification 1',
        description: 'Some event happened',
    },
    {
        id: '2',
        title: 'Notification 2',
        description: 'Some event happened',
        href: 'http://localhost:3000/admin',
    },
];

const meta: Meta<typeof NotificationsList> = {
    title: 'entities/Notification/NotificationsList',
    component: NotificationsList,
    tags: ['autodocs'],
    args: {},
    decorators: [StoreDecorator({})],

    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: mockResponse,
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationsList>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
