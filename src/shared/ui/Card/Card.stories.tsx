import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
    args: {
        
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]  
};
export const Dark: Story = {
    args: {
        
    },
    decorators:[ThemeDecorator(Theme.DARK)]  
};
export const Orange: Story = {
    args: {
        
    },
    decorators:[ThemeDecorator(Theme.ORANGE)]  
};
