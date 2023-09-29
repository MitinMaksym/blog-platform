import type { Meta, StoryObj } from '@storybook/react';
import { Tags } from './Tags';

const meta: Meta<typeof Tags> = {
    title: 'shared/Tags',
    component: Tags,
    tags: ['autodocs'],
    args: {
        items: [
            { value: '1', content: 'Tag1' },
            { value: '2', content: 'Tag2' },
            { value: '3', content: 'Tag3' },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
export const Selected: Story = {
    args: {
        value: '1',
    },
    decorators: [],
};
