import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarIcon from '@/shared/assets/avatar.webp';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        data: {
            first: 'First Name',
            lastname: 'Last Name',
            username: 'Nickname',
            age: 25,
            avatar: AvatarIcon,
            country: Country.UKRAINE,
            currency: Currency.EUR,
        },
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {};

export const WithLoading: Story = {
    args: {
        loading: true,
    },
};
