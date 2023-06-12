import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
    args: {},
    decorators:[StoreDecorator({articleDetails:{}})]
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
