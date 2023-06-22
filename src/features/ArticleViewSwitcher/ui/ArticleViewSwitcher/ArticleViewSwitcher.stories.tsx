import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
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
        view:'LIST'
    },
    decorators:[ThemeDecorator(Theme.DARK)]  
};
export const GRID: Story = {
    args: {
        view:'GRID'
    },
    decorators:[ThemeDecorator(Theme.DARK)]  
 
};
