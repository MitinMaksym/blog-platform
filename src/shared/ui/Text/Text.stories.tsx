import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
    },
};

export const Error: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Text title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text text',
    },
};

export const AlignRight: Story = {
    args: {
        text: 'Text text',
        align: 'right',
    },
};

export const AlignCenter: Story = {
    args: {
        text: 'Text text',
        align: 'center',
    },
};

export const SizeS: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        size: 'sizeS',
    },
};

export const SizeM: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        size: 'sizeM',
    },
};

export const SizeL: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        size: 'sizeL',
    },
};
