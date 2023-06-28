import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';


jest.mock('axios');
jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {

    test('should load next page', async () => {
        const thunk = new TestAsyncThunk<void, void, string>(fetchNextArticlesPage, {
            articlesPage: {
                limit: 5, 
                loading: false, 
                hasMore: true, 
                page: 5
            }
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toBeCalled();
    });

    test('not call fetchArticlesList in hasMore is false', async () => {
        const thunk = new TestAsyncThunk<void, void, string>(fetchNextArticlesPage, {
            articlesPage: {
                limit: 5, 
                loading: false, 
                hasMore:false,
                page:5
            }
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('not call fetchArticlesList if loading ', async () => {
        const thunk = new TestAsyncThunk<void, void, string>(fetchNextArticlesPage, {
            articlesPage: {
                limit: 5, 
                loading: true, 
                hasMore: true,
                page:5
            }
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

 
});