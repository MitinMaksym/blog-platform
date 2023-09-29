import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { Article } from '../../types/article';

jest.mock('axios');

describe('fetchArticleById', () => {
    const data = {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        type: ['IT'],
        blocks: [
            {
                id: '1',
                type: 'TEXT',
                title: 'Заголовок этого блока',
                paragraphs: ['Программа, которую по традиции называют «Hello, world!», очень проста.'],
            },
        ],
    };

    test('should load article data', async () => {
        const thunk = new TestAsyncThunk<Article, string, string>(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(data);
    });

    test('with error', async () => {
        const thunk = new TestAsyncThunk<Article, string, string>(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual('error');
    });
});
