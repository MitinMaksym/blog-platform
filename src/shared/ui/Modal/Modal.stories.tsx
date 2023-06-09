import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import {  Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        open:true,
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, suscipit'
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
    args: {
    },
    decorators: [ThemeDecorator()]
};

// export const Dark: Story = {
//     args: {
//         children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//         Nulla consequuntur sequi harum, earum accusamus esse`

//     },
//     decorators: [ThemeDecorator(Theme.DARK)]
// }; 

