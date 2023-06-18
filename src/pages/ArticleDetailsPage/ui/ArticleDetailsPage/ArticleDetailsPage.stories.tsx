import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { withRouter } from 'storybook-addon-react-router-v6';
import avatarImg from 'shared/assets/avatar.webp';
import { SuspenseDecorator } from 'shared/config/storybook/decorators/SuspenseDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

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

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    tags: ['autodocs'],
    args: {},
    decorators:[withRouter, SuspenseDecorator, StoreDecorator({
        articleDetails: {data}, 
        addCommentForm: {text:'Test comment'},
        articleDetailsComments:{
            ids:['1'],
            entities:{
                '1':  {
                    id: '1',
                    text: 'some comment',
                    user: {
                        id: '1',
                        username: 'John',
                        avatar: avatarImg
                    }

                }
            }
        }
    }), 
    ThemeDecorator(Theme.LIGHT)],
    parameters: {
        reactRouter: {
            routePath: '/articles/:id',
            routeParams: { id: '1' },
        }
    }
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

export const Primary: Story = {
    args: {},
    decorators:[]  
};
