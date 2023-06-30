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
    args: {to: '/'},
    decorators: [RouterDecorator]
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Text',
    },
    decorators:[ThemeDecorator()]

};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Text',
    },
    decorators:[ThemeDecorator()]

};
export const Outlined: Story = {
    args: {
        theme: AppLinkTheme.OUTLINED,
        children: 'Text',
    },
    decorators:[ThemeDecorator()]

};

export const Inverted: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Text',
    },
    decorators:[ThemeDecorator()]

};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};