import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ArticlesFilters } from './ArticlesFilters';

const meta: Meta<typeof ArticlesFilters> = {
    title: 'features/ArticlesFilters',
    component: ArticlesFilters,
    tags: ['autodocs'],
    args: {},
    decorators: [withRouter, StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;

export const Primary: Story = {
    args: {},
    decorators: [],
};
