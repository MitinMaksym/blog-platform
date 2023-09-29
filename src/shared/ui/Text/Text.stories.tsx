import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Text, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

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
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Error: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ErrorDark: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        theme: TextTheme.ERROR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Text title',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OnlyText: Story = {
    args: {
        text: 'Text text',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Text title',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AlignLeft: Story = {
    args: {
        text: 'Text text',
        align: 'left',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const AlignRight: Story = {
    args: {
        text: 'Text text',
        align: 'right',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const AlignCenter: Story = {
    args: {
        text: 'Text text',
        align: 'center',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeS: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        size: 'sizeS',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeM: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        size: 'sizeM',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SizeL: Story = {
    args: {
        title: 'Test title',
        text: 'Text text',
        size: 'sizeL',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)],
};
