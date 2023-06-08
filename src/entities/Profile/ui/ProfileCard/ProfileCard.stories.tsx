import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import AvatarIcon from 'shared/assets/avatar.webp';
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
            avatar: AvatarIcon,
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


