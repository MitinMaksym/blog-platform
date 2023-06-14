import type { Meta, StoryObj } from '@storybook/react';
import avatarImg from 'shared/assets/avatar.webp';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
    args: {
        comment: {
            id: '1',
            text: 'some comment',
            user: {
                id: '1',
                username: 'Test',
                avatar: avatarImg
            }

        }
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
