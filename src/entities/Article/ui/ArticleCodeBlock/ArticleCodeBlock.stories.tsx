import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlock } from './ArticleCodeBlock';

const meta: Meta<typeof ArticleCodeBlock> = {
    title: 'entities/ArticleCodeBlock',
    component: ArticleCodeBlock,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlock>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
