import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import testImg from '@/shared/assets/testImg.png';
import avatarImg from '@/shared/assets/avatar.webp';
import  ArticlesPage  from './ArticlesPage';
import { ArticlesPageSchema } from '../../model/types/articlesPageSchema';
import { Theme } from '@/shared/const/theme';

const articlesPageState: ArticlesPageSchema = {
   
    entities:{
        '1': {
            'id': '1',
            'title': 'Javascript news',
            'subtitle': 'Что нового в JS за 2022 год?',
            'img': testImg,
            'views': 1022,
            'createdAt': '26.02.2022',
            'user':    {
                'id': '1',
                'username': 'admin',
                'avatar': avatarImg
            },
            'type': [
                'IT', 'SCIENCE', 'SCIENCE', 'IT'
            ],
            'blocks': [
                {
                    'id': '1',
                    'type': 'TEXT',
                    'title': 'Заголовок этого блока',
                    'paragraphs': [
                        // eslint-disable-next-line
                            'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    ]
                },
            ]
                    
        },
        '2': {
            'id': '2',
            'title': 'Javascript news',
            'subtitle': 'Что нового в JS за 2022 год?',
            'img': testImg,
            'views': 1022,
            'createdAt': '26.02.2022',
            'user':    {
                'id': '1',
                'username': 'admin',
                'avatar': avatarImg
            },
            'type': [
                'IT', 'SCIENCE', 'SCIENCE', 'IT'
            ],
            'blocks': [
                {
                    'id': '1',
                    'type': 'TEXT',
                    'title': 'Заголовок этого блока',
                    'paragraphs': [
                        // eslint-disable-next-line
                            'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    ]
                },
            ]
                    
        }
    },
    ids:['1', '2'],
    loading: false,
    error: undefined,
    view: 'GRID',
    page: 1,
    hasMore: true,
    limit:10
};

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    tags: ['autodocs'],
    args: {},
    decorators:[
        withRouter, 
        ThemeDecorator(Theme.DARK), 
        StoreDecorator({ articlesPage: articlesPageState })
    ],
    parameters: {
        loki: {
            skip: true
        }
    }
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Grid: Story = {
    args: {
    
    },
};

export const List: Story = {
    args: {},
    decorators:[ StoreDecorator({ articlesPage: {...articlesPageState, view: 'LIST'} })],

};

export const Error: Story = {
    args: {},
    decorators:[ StoreDecorator({ articlesPage: {...articlesPageState, error: 'Error'} })],

};

export const LoadingGrid: Story = {
    args: {},
    decorators:[ StoreDecorator({ articlesPage: {...articlesPageState, loading: true} })],
    parameters: {
        loki: {
            skip: true
        }
    }

};

export const LoadingList: Story = {
    args: {},
    decorators:[ StoreDecorator({ articlesPage: {...articlesPageState, loading: true, view:'LIST'} })],
    parameters: {
        loki: {
            skip: true
        }
    }

};
