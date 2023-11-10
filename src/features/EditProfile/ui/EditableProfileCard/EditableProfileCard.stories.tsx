import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import AvatarIcon from '@/shared/assets/avatar.webp';
import { ProfileError } from '../../model/consts/consts';
import { EditableProfileCard } from './EditableProfileCard';

const data = {
    first: 'First Name',
    lastname: 'Last Name',
    username: 'Nickname',
    age: 25,
    avatar: AvatarIcon,
    country: Country.UKRAINE,
    currency: Currency.EUR,
};

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({ profile: { form: data } })],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {};

export const WithError: Story = {
    decorators: [StoreDecorator({ profile: { form: data, errors: [ProfileError.INCORRECT_USER_DATA] } })],
};
