import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesTags } from './ArticlesTags';

const meta: Meta<typeof ArticlesTags> = {
    title: 'features/ArticlesFilters/ArticlesTags',
    component: ArticlesTags,
    tags: ['autodocs'],
    args: {
        
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesTags>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
