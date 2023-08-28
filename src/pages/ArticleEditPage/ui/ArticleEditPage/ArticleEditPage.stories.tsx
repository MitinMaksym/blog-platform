import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import  ArticleEditPage  from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    tags: ['autodocs'],
    args: {},
    decorators: [withRouter, StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
