import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import {  Avatar } from './Avatar';
import avatarImg from './avatarImg.webp'; 

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
       
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
    args: {
        size: 50,
        src: avatarImg
    },
    decorators:[ThemeDecorator()]
};

export const Big: Story = {
    args: {
        size: 150,
        src: avatarImg
    },
    decorators:[ThemeDecorator()]
};

