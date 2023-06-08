import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileError } from 'features/EditProfile/model/types/profileSchema';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import AvatarIcon from 'shared/assets/avatar.webp';
import {EditableProfileCard} from './EditableProfileCard';

const data = { 
    first:'First Name', 
    lastname:'Last Name', 
    username:'Nickname', 
    age: 25, 
    avatar: AvatarIcon,
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
