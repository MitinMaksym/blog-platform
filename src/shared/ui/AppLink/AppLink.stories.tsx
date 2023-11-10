import type { Meta, StoryObj } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {},
    args: { to: '/' },
    decorators: [RouterDecorator],
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Text',
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Text',
    },
};
export const Outlined: Story = {
    args: {
        theme: AppLinkTheme.OUTLINED,
        children: 'Text',
    },
};

export const Inverted: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        children: 'Text',
    },
};
