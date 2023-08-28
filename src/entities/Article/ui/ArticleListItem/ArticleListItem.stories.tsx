import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import testImg from '@/shared/assets/testImg.png';
import avatarImg from '@/shared/assets/avatar.webp';
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
        'avatar': avatarImg
    },
    'type': [
        'IT', 'SCIENCE', 'SCIENCE', 'IT'
    ],
    'blocks': [
        {
            'id': '7',
            'type': 'TEXT',
            'title': 'Заголовок этого блока',
            'paragraphs': [
                // eslint-disable-next-line
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ]
        },
    ]
} as Article;

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    tags: ['autodocs'],
    args: {
        article
    },
    decorators:[withRouter],
    parameters: {
        loki: { skip: true }, // TODO: figure out why screenshots fails in ci
    }  
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

