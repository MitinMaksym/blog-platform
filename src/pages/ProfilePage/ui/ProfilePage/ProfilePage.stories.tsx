import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatarIcon from '@/shared/assets/avatar.webp';
import ProfilePage  from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        reactRouter: {
            routePath: '/profile/:id',
            routeParams: { id: '1' },
        }
    },
    decorators:[withRouter, StoreDecorator({profile: {
        form: { 
            first:'First Name', 
            lastname:'Last Name', 
            username:'Nickname', 
            age: 25, 
            avatar: avatarIcon,
            country: Country.UKRAINE,
            currency: Currency.EUR
        }
    }
    })]
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
    decorators:[ThemeDecorator(), ]
};
export const Dark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};