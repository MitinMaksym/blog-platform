import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import testImg from '@/shared/assets/testImg.png';
import { UserRole } from '@/entities/User';
import { PaddingDecorator } from '@/shared/config/storybook/decorators/PaddingDecorator';
import { AvatarDropdown } from './AvatarDropdown';


const meta: Meta<typeof AvatarDropdown> = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs'],
    args: { direction: 'bottomCenter' },
    decorators: [
        withRouter(),
        StoreDecorator({
            user: { authData: { avatar: testImg, roles: [UserRole.ADMIN] } },
        }),
        PaddingDecorator(200)
    ],
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Primary: Story = {
    args: {
        disabled: true
    },
};
