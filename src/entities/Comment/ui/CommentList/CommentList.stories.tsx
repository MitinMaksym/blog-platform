import type { Meta, StoryObj } from '@storybook/react';
import avatarImg from 'shared/assets/avatar.webp';
import { withRouter } from 'storybook-addon-react-router-v6';
import { CommentList } from './CommentList';


const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    args: {
        comments: [
            {
                id: '1',
                text: 'some comment',
                user: {
                    id: '1',
                    username: 'John',
                    avatar: avatarImg
                }
    
            },

        ]
    },
    decorators:[withRouter]
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {},
};

export const Loading: Story = {
    args: {
        loading: true,
    },
    parameters: {
        loki: { skip: true },
    }
};
