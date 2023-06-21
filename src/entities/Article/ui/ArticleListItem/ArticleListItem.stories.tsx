import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import testImg from 'shared/assets/testImg.png';
import { Article } from '../../model/types/article';
import { ArticleListItem } from './ArticleListItem';



const article = {
    'id': '1',
    'title': 'Javascript news',
    'subtitle': 'Что нового в JS за 2022 год?',
    'img': testImg,
    'views': 1022,
    'createdAt': '26.02.2022',
    'user':    {
        'id': '1',
        'username': 'admin',
        // eslint-disable-next-line
        'avatar': 'https://st2.depositphotos.com/1000393/6507/i/600/depositphotos_65076917-stock-photo-hacker-and-terrorism-fight.jpg'
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
        {
            'id': '4',
            'type': 'CODE',
            // eslint-disable-next-line
            'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
        },
        {
            'id': '5',
            'type': 'TEXT',
            'title': 'Заголовок этого блока',
            'paragraphs': [
                // eslint-disable-next-line
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
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
            // eslint-disable-next-line
            'code': "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
        },
        {
            'id': '7',
            'type': 'TEXT',
            'title': 'Заголовок этого блока',
            'paragraphs': [
                // eslint-disable-next-line
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ]
        },
        {
            'id': '8',
            'type': 'IMAGE',
            'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            'title': 'Рисунок 1 - скриншот сайта'
        },
        {
            'id': '9',
            'type': 'TEXT',
            'title': 'Заголовок этого блока',
            'paragraphs': [
                // eslint-disable-next-line
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
            ]
        }
    ]
} as Article;

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    tags: ['autodocs'],
    args: {
        article
    },
    decorators:[withRouter]
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Grid: Story = {
    args: {
        view:'GRID',
    },

};
export const List: Story = {
    args: {
        view:'LIST'
    },

};

