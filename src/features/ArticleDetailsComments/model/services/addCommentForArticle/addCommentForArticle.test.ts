import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Comment } from '@/entities/Comment';
import { addCommentForArticle } from './addCommentForArticle';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

jest.mock('axios');
jest.mock('../fetchCommentsByArticleId/fetchCommentsByArticleId');

describe('addCommentForArticle', () => {

    const comment = {
        id: '1',
        text: 'Comment Text',
        articleId: '1',
        userId: '2'
    };

    const storeData = {
        user: { 
            authData: { id: '1'}
        },
        articleDetails: { 
            data: { id:'1' }
        }
    };

    test('should add new comment for article', async () => {
        const thunk = new TestAsyncThunk<Comment, string, string>(addCommentForArticle, storeData);

        thunk.api.post.mockReturnValue(Promise.resolve({data:comment}));
        const result = await thunk.callThunk('Comment Text');
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toEqual(comment);    
    });

    test('should fetch new comments', async () => {
        const thunk = new TestAsyncThunk<Comment, string, string>(addCommentForArticle, storeData);
        thunk.api.post.mockReturnValue(Promise.resolve({data:comment}));
        await thunk.callThunk('Comment Text');
        expect(fetchCommentsByArticleId).toHaveBeenCalled();
        expect(thunk.dispatch).toBeCalledTimes(3);
        
    });

    test('with error', async () => {
        const thunk = new TestAsyncThunk<Comment, string, string>(addCommentForArticle, storeData);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('Comment Text');
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toEqual('send-comment-failure');
    });
});