import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '@/entities/Notification';
import { PaddingDecorator } from '@/shared/config/storybook/decorators/PaddingDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ShowNotificationsButton } from './ShowNotificationsButton';

const mockResponse:Array<Notification> = [
    {
        'id': '1',
        'title': 'Notification 1',
        'description': 'Some event happened',    },
    {
        'id': '2',
        'title': 'Notification 2',
        'description': 'Some event happened',
    },
];

const meta: Meta<typeof ShowNotificationsButton> = {
    title: 'features/ShowNotificationsButton',
    component: ShowNotificationsButton,
    tags: ['autodocs'],
    args: {},
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
    decorators: [
        StoreDecorator({}),
        PaddingDecorator(200)
    ],
};

export default meta;
type Story = StoryObj<typeof ShowNotificationsButton>;

export const Primary: Story = {
    args: {
        direction: 'bottomRight'
    },
    decorators:[]  
};

