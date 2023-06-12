import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlock } from './ArticleImageBlock';

const meta: Meta<typeof ArticleImageBlock> = {
    title: 'entities/ArticleImageBlock',
    component: ArticleImageBlock,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlock>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
