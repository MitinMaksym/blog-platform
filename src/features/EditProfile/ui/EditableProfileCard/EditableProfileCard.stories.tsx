import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileError } from 'features/EditProfile/model/types/profileSchema';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import {EditableProfileCard} from './EditableProfileCard';

const data = { 
    first:'First Name', 
    lastname:'Last Name', 
    username:'Nickname', 
    age: 25, 
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    country: Country.UKRAINE,
    currency: Currency.EUR
};

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({profile: {form: data}})]
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};


export const WithError: Story = {
    decorators: [ThemeDecorator(Theme.DARK), 
        StoreDecorator({profile: {form:data, errors:[ProfileError.INCORRECT_USER_DATA]}})],
    
};
