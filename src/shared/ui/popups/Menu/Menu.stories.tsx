import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { PaddingDecorator } from '@/shared/config/storybook/decorators/PaddingDecorator';
import { Button } from '../../Button/Button';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
    title: 'shared/Menu',
    component: Menu,
    tags: ['autodocs'],
    args: {
        trigger: <Button>+</Button>,
        items: [
            {
                content: 'Option 1',
            },
            {
                content: 'Option 2',
            },
            {
                content: 'Option 3',
            },
            {
                content: 'Option 4',
            },
        ],
    },
    decorators: [withRouter, PaddingDecorator(200)],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
    args: {},
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


