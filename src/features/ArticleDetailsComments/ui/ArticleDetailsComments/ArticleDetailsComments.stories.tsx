import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import avatarImg from '@/shared/assets/avatar.webp';
import  ArticleDetailsComments  from './ArticleDetailsComments';


const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'features/ArticleDetailsComments',
    component: ArticleDetailsComments,
    tags: ['autodocs'],
    args: {},
    decorators:[withRouter, StoreDecorator({articleDetailsComments:{
        ids:['1'],
        entities:{
            '1':  {
                id: '1',
                text: 'some comment',
                user: {
                    id: '1',
                    username: 'John',
                    avatar: avatarImg
                }

            }
        },
        text:'Comment'
    }})]
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
