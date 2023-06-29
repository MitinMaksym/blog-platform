import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { withRouter } from 'storybook-addon-react-router-v6';
import testImg from 'shared/assets/testImg.png';
import avatarImg from 'shared/assets/avatar.webp';
import { ArticleRecommendations } from './ArticleRecommendations';
import { AricleRecommendationsSchema } from '../../model/types/articleRecommendationsSchema';

const recommendationsState: AricleRecommendationsSchema= {
   
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
                    
        },
        '3': {
            'id': '3',
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
        '4': {
            'id': '4',
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
        '5': {
            'id': '5',
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
    },
    ids:['1', '2', '3', '4', '5'],
    loading: false,
    error: undefined,
};

const meta: Meta<typeof ArticleRecommendations> = {
    title: 'features/ArticleRecommendations',
    component: ArticleRecommendations,
    tags: ['autodocs'],
    args: {},
    parameters: {
        loki: {
            skip: true
        }
    },
    decorators: [withRouter, StoreDecorator({aricleRecommendations: recommendationsState})]
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendations>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
