import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Article } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

const data: Article =  {
    'id': '1',
    'title': 'Javascript news',
    'subtitle': 'Что нового в JS за 2022 год?',
    'img': 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    'views': 1022,
    'createdAt': '26.02.2022',
    'type': ['IT'],
    'blocks': [
        {
            'id': '1',
            'type': 'TEXT',
            'title': 'Заголовок этого блока',
            'paragraphs': [
                'Программа, которую по традиции называют «Hello, world!», очень проста.'
            ]
        },
        {
            'id': '2',
            'type': 'IMAGE',
            'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            'title': 'Рисунок 1 - скриншот сайта'
        },
        {
            'id': '3',
            'type': 'CODE',
            'code': `const path = require('path');\n\nconst server = 
            jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));
            \n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);`
        },
    ]
};
 
const meta: Meta<typeof ArticleDetails> = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    tags: ['autodocs'],
    args: {},
    decorators:[StoreDecorator({articleDetails: {data}})]
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};

export const Loading: Story = {
    args: {},
    decorators:[StoreDecorator({articleDetails: {loading: true}})]
 
};

export const Error: Story = {
    args: {},
    decorators:[StoreDecorator({articleDetails: {error: 'Error'}})]
 
};
