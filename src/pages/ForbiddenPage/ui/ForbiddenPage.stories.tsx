import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import ForbiddenPage from './ForbiddenPage';

const meta: Meta<typeof ForbiddenPage> = {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [withRouter, StoreDecorator({ page: { scroll: {} } })],
};

export default meta;
type Story = StoryObj<typeof ForbiddenPage>;

export const Primary: Story = {
    args: {},
    decorators: [ThemeDecorator()],
};
