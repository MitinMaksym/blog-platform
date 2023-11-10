import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';

const meta: Meta<typeof ArticleViewSwitcher> = {
    title: 'features/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleViewSwitcher>;

export const LIST: Story = {
    args: {
        view: 'LIST',
    },
};
export const GRID: Story = {
    args: {
        view: 'GRID',
    },
};
