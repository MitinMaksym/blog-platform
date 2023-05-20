import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BtnVariant, Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: BtnVariant,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        variant: BtnVariant.CLEAR,
        children: 'Text'
    },
};
export const Outlined: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text'
    },
};
export const OutlinedDark: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text',
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

