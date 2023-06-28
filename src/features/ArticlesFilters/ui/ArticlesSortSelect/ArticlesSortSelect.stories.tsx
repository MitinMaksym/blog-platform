import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesSortSelect } from './ArticlesSortSelect';

const meta: Meta<typeof ArticlesSortSelect> = {
    title: 'features/ArticlesFilters/ArticlesSortSelect',
    component: ArticlesSortSelect,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesSortSelect>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
