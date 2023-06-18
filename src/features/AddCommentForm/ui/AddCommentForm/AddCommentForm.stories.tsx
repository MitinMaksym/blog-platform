import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import  AddCommentForm  from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
    args: {},
    decorators: [
        StoreDecorator({
            addCommentForm: {
                text:'Test comment'
            }
        })
    ]
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
