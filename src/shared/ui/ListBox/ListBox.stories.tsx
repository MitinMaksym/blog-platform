import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    args: {
        id:'test-select',
        items: [
            {value: '1', content: 'Item 1'},
            {value: '2', content: 'Item 2'},
            {value: '3', content: 'Item 3'},
        ],
        value: '1'
    },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};

export const WithLable: Story = {
    args: {
        label: 'Label'
    },
    decorators:[]  
};
