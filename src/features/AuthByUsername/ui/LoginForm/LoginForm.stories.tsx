import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import {  LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {},
    args: {
       
    },
    decorators:[StoreDecorator({ loginForm: {username:'Test', password:'123'}})]
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
    },
    decorators:[StoreDecorator({ loginForm: 
        {username:'Test', password:'123'}})]
};

export const WithError: Story = {
    args: {
    },
    decorators:[StoreDecorator({ loginForm: 
        {username:'Test', password:'123', error: 'Test Error'}})]
};

export const WithLoading: Story = {
    args: {
    },
    decorators:[StoreDecorator({ loginForm: 
        {loading: true}})]
};


