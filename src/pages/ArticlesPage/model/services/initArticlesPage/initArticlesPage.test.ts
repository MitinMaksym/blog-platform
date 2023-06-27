import { ARTICLES_VIEW } from 'shared/const/localstorage';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';


jest.mock('axios');
jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
    const state  = {
        limit: 5, 
        loading: false, 
        hasMore: true, 
        page: 5,
        _inited: false
    };

    test('should init state', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: state
        });
        const initAction = articlesPageActions.initState();
        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledWith(initAction);
        expect(thunk.dispatch).toBeCalledTimes(5);
        expect(fetchArticlesList).toBeCalledWith({page: 5});
    });

    test('should not init state if already inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {...state, _inited: true}
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toBeCalled();
    });

    test('should retriew view from localStorage', async () => {
        jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem');
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {...state, _inited: false}
        });
        await thunk.callThunk();
        expect(window.localStorage.getItem).toHaveBeenCalled();
        expect(window.localStorage.getItem).toHaveBeenCalledWith(ARTICLES_VIEW);

    });
 
});