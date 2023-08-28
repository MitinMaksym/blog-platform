import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import avatarImg from '@/shared/assets/avatar.webp';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
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
    decorators:[withRouter]
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
