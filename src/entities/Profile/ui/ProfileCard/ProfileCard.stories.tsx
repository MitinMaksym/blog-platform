import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import {ProfileCard} from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        data:{ 
            first:'First Name', 
            lastname:'Last Name', 
            username:'Nickname', 
            age: 25, 
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            country: Country.UKRAINE,
            currency: Currency.EUR
        }
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]

};

export const WithLoading: Story = {
    args: {
        loading: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};


