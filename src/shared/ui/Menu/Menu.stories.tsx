import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Button } from '../Button/Button';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
    title: 'shared/Menu',
    component: Menu,
    tags: ['autodocs'],
    args: {
        trigger: <Button>+</Button>,
        items: [
            {
                content: 'Option 1'
            },
            {
                content: 'Option 2'
            },
            {
                content: 'Option 3'
            },
            {
                content: 'Option 4'
            },
        ]
    },
    decorators: [withRouter, (Story: StoryFn) => (
        <div style={{padding: '100px'}}>
            <Story/>
        </div>
    )
    ]
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
export const TopLeft: Story = {
    args: {
        direction: 'topLeft'
    },
    decorators:[]  
};
export const TopRight: Story = {
    args: {
        direction: 'topRight'
    },
    decorators:[]  
};
export const BottomLeft: Story = {
    args: {
        direction: 'bottomLeft'
    },
    decorators:[]  
};
export const BottomRight: Story = {
    args: {
        direction: 'bottomRight'
    },
    decorators:[]  
};


