import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

jest.mock('axios');

describe('fetchCommentsByArticleId', () => {

    const data =  [
        {
            id: '1',
            text: 'some comment',
            user: {
                id: '1',
                username: 'John',
                avatar: ''
            }

        },
        {
            id: '2',
            text: 'some comment 2',
            user: {
                id: '2',
                username: 'Tom',
                avatar: ''
            }

        }
    ];

    test('should load article data', async () => {
        const thunk = new TestAsyncThunk<Array<Comment>, string | undefined, string>(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual(data);
    });

    test('with error', async () => {
        const thunk = new TestAsyncThunk<Array<Comment>, string | undefined, string>(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.payload).toEqual('Error');
    });
});