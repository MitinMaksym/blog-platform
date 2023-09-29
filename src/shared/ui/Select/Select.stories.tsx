import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        id: 'TestId',
        label: 'Choose option',
        options: [
            { value: 'option1', content: 'Option 1' },
            { value: 'option2', content: 'Option 2' },
        ],
    },
    decorators: [ThemeDecorator()],
};
