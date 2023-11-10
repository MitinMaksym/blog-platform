import type { Meta, StoryObj } from '@storybook/react';
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
        children: 'Text',
    },
};

export const Outlined: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text',
    },
};

export const OutlinedError: Story = {
    args: {
        variant: BtnVariant.OUTLINE_ERROR,
        children: 'Text',
    },
};

export const OutlinedL: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text',
        size: BtnSize.L,
    },
};

export const OutlinedXL: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text',
        size: BtnSize.XL,
    },
};

export const Background: Story = {
    args: {
        variant: BtnVariant.BACKGROUND,
        children: 'Text',
    },
};

export const BackgroundInverted: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: 'Text',
    },
};

export const LSize: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: 'Text',
        size: BtnSize.L,
    },
};

export const XLSize: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: 'Text',
        size: BtnSize.XL,
    },
};

export const Square: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: '>',
        square: true,
    },
};

export const SquareL: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: BtnSize.L,
    },
};

export const SquareXL: Story = {
    args: {
        variant: BtnVariant.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: BtnSize.XL,
    },
};
