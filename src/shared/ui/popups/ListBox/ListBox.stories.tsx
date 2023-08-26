import type { Meta, StoryObj } from '@storybook/react';
import { PaddingDecorator } from 'shared/config/storybook/decorators/PaddingDecorator';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    args: {
        id: 'test-select',
        items: [
            { value: '1', content: 'Some item 1' },
            { value: '2', content: 'Some item 2' },
            { value: '3', content: 'Some item 3' },
        ],
        value: '1',
    },
    decorators: [
        PaddingDecorator(200)
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {},
};
export const Disabled: Story = {
    args: { disabled: true },
    decorators: [],
};

export const WithLable: Story = {
    args: {
        label: 'Label',
        direction: 'bottomCenter'
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

