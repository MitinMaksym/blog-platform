import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { withRouter } from 'storybook-addon-react-router-v6';
import testImg from 'shared/assets/testImg.png';
import avatarImg from 'shared/assets/avatar.webp';
import { Article } from 'entities/Article';
import { ArticleRecommendations } from './ArticleRecommendations';


const mockResponse: Article[]= [{
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
{
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
{
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
{
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
{
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
];
            
   

const meta: Meta<typeof ArticleRecommendations> = {
    title: 'features/ArticleRecommendations',
    component: ArticleRecommendations,
    tags: ['autodocs'],
    args: {},
    parameters: {
        loki: {
            skip: true
        },
        mockData: [
            {
                url: `${__API__}/articles?_limit=5`,
                method: 'GET',
                status: 200,
                response: mockResponse,
               
            },
        ],
    },
    decorators: [withRouter(), StoreDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendations>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
