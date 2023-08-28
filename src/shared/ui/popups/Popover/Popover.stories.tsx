import type { Meta, StoryObj } from '@storybook/react';
import { PaddingDecorator } from '@/shared/config/storybook/decorators/PaddingDecorator';
import { Button } from '../../Button/Button';
import {  Popover } from './Popover';

const content = <div>{'Hello World'}</div>;


const meta: Meta<typeof Popover> = {
    title: 'shared/Popover',
    component: Popover,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: content,
        trigger: <Button>{'Show content'}</Button>,
    },
    decorators: [PaddingDecorator(200)],
};

export default meta;
type Story = StoryObj<typeof Popover>;


export const Primary: Story = {
    args: {
    },
};

export const Disabled: Story = {
    args: {
        disabled: true
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'topLeft'
    }, 
};

export const TopRight: Story = {
    args: {
        direction: 'topRight'
    }, 
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottomLeft'
    }, 
};

export const BottomRight: Story = {
    args: {
        direction: 'bottomRight'
    }, 
};

export const BottomCenter: Story = {
    args: {
        direction: 'bottomCenter'
    }, 
};

