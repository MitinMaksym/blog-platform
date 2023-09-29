import type { Meta, StoryObj } from '@storybook/react';
import { AutoHeightTextarea } from './AutoHeightTextarea';

const meta: Meta<typeof AutoHeightTextarea> = {
    title: 'shared/AutoHeightTextarea',
    component: AutoHeightTextarea,
    tags: ['autodocs'],
    args: {},
};

export default meta;
type Story = StoryObj<typeof AutoHeightTextarea>;

export const Primary: Story = {
    args: {
        value: 'Text',
    },
    decorators: [],
};
