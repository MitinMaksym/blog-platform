import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    tags: ['autodocs'],
    args: {
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </>
        ),
    },
    decorators: [ThemeDecorator()],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
    args: {},
    decorators: [],
};

export const JustifyCenter: Story = {
    args: {
        justify: 'center',
    },
    decorators: [],
};

export const JustifyBetween: Story = {
    args: {
        justify: 'between',
    },
    decorators: [],
};

export const Column: Story = {
    args: {
        direction: 'column',
    },
    decorators: [],
};

export const Gap4: Story = {
    args: {
        gap: '4',
    },
    decorators: [],
};

export const Gap8: Story = {
    args: {
        gap: '8',
    },
    decorators: [],
};

export const Gap16: Story = {
    args: {
        gap: '16',
    },
    decorators: [],
};

export const Gap24: Story = {
    args: {
        gap: '24',
    },
    decorators: [],
};

export const Gap32: Story = {
    args: {
        gap: '32',
    },
    decorators: [],
};

export const ColumnGap16: Story = {
    args: {
        direction: 'column',
        gap: '16',
    },
    decorators: [],
};

export const ColumnGap24: Story = {
    args: {
        direction: 'column',
        gap: '24',
    },
    decorators: [],
};
