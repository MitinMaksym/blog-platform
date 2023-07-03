import type { Meta, StoryObj } from '@storybook/react';
import  {AddCommentForm}  from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'entities/Comment/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    args: {
        value: 'Test comment'
    },
    decorators: []
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
