import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatarIcon from '@/shared/assets/avatar.webp';
import ProfilePage  from './ProfilePage';
import { Rating } from '@/entities/Rating';
import { Theme } from '@/shared/const/theme';

const ratingData: Array<Rating> = [{
    rate: 4
}];

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        reactRouter: {
            routePath: '/profile/:id',
            routeParams: { id: '1' },
        },
        mockData: [
            {
                url: `${__API__}/profile-ratings?profileId=1&userId=1`,
                method: 'GET',
                status: 200,
                response: ratingData,
            },
        ],
    },
    decorators: [
        withRouter,
        StoreDecorator({
            user: {authData: {id: '1'}},
            profile: {
                form: {
                    first: 'First Name',
                    lastname: 'Last Name',
                    username: 'Nickname',
                    age: 25,
                    avatar: avatarIcon,
                    country: Country.UKRAINE,
                    currency: Currency.EUR,
                },
            },
        }),
    ],
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