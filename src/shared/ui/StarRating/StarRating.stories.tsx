import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const WithoutValue: Story = {
    args: {
        rating: 0,
    },
    decorators: [],
};

export const WithValue: Story = {
    args: {
        rating: 4,
    },
    decorators: [],
};
