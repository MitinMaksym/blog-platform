import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { BtnSize, BtnVariant, Button } from './Button';

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
    decorators:[ThemeDecorator()]  
};

export const Outlined: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text'
    },
    decorators:[ThemeDecorator()]
};

export const OutlinedL: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text',
        size: BtnSize.L
    },
    decorators:[ThemeDecorator()]
};

export const OutlinedXL: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text',
        size: BtnSize.XL
    },
    decorators:[ThemeDecorator()]  
};

export const OutlinedDark: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text',
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const Background: Story = {
    args: {
        variant: BtnVariant.BACKGROUND,
        children: 'Text',
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const BackgroundInverted: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: 'Text',
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const LSize: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: 'Text',
        size: BtnSize.L
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const XLSize: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: 'Text',
        size: BtnSize.XL
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const Square: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: '>',
        square: true
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const SquareL: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: BtnSize.L
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const SquareXL: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: BtnSize.XL
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};



