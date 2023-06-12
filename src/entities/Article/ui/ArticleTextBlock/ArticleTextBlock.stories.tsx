import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlock } from './ArticleTextBlock';

const meta: Meta<typeof ArticleTextBlock> = {
    title: 'entities/ArticleTextBlock',
    component: ArticleTextBlock,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlock>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
