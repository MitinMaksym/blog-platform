import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesOrderSelect } from './ArticlesOrderSelect';
 
const meta: Meta<typeof ArticlesOrderSelect> = {
    title: 'features/ArticlesFilters/ArticlesOrderSelect',
    component: ArticlesOrderSelect,
    tags: ['autodocs'],
    args: {
        value: 'asc'
    },
};

export default meta;
type Story = StoryObj<typeof ArticlesOrderSelect>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
