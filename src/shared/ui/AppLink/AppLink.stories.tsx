import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';
import {  AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {to: "/"},
    decorators: [RouterDecorator]
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AppLinkPrimary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: "Text"
    },
};

export const AppLinkPrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: "Text"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const AppLinkSecondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: "Text"
    },
};

export const AppLinkSecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: "Text"
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};