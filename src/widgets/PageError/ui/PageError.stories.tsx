import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import {  PageError } from './PageError';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const PageErrorLight: Story = {
    args: {},
};
export const PageErrorDark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};

