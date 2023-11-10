import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        open: true,
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, suscipit',
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {},
};
