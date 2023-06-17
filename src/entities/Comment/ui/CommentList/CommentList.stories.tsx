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
            {
                id: '2',
                text: 'some comment 2',
                user: {
                    id: '2',
                    username: 'Tom',
                    avatar: avatarImg
                }
    
            }
        ]
    },
    decorators:[withRouter]
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    args: {},
};
