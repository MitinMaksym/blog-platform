import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Article } from '@/entities/Article';
import { fetchArticlesList, FetchArticlesListProps } from './fetchArticlesList';

jest.mock('axios');

describe('fetchArticlesList', () => {
    const articlesData = [
        {
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png"',
            views: 1022,
            createdAt: '26.02.2022',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://thumbs.dreamstime.com/b/hacker-picture-computer-44924794.jpg',
            },
            type: ['IT', 'SCIENCE', 'SCIENCE', 'IT'],
            blocks: [
                {
                    id: '1',
                    type: 'TEXT',
                    title: 'Заголовок этого блока',
                    paragraphs: ['Программа, которую по традиции называют «Hello, world!», очень проста.'],
                },
            ],
        },
    ];

    test('should load profile data', async () => {
        const thunk = new TestAsyncThunk<Array<Article>, FetchArticlesListProps, string>(fetchArticlesList, {
            articlesPage: { limit: 5 },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articlesData }));
        const result = await thunk.callThunk({});
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(articlesData);
    });

    test('with error', async () => {
        const thunk = new TestAsyncThunk<Array<Article>, FetchArticlesListProps, string>(fetchArticlesList, {
            articlesPage: { limit: 5 },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({});
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toBe('Error');
    });
});
