import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { selectUserAuthData } from 'entities/User';
import { selectArticleDetailsData } from 'entities/Article';
import { selectCommentFormText } from 'features/AddCommentForm';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = 
createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'pages/addCommentForArticle',
    async (_, { rejectWithValue, extra, dispatch, getState }) => {
        try {
            const article = selectArticleDetailsData(getState());
            const user = selectUserAuthData(getState());
            const text = selectCommentFormText(getState());

            if(!article || !user || !text) return rejectWithValue('send-comment-failure');

            const response = await extra.api.post<Comment>('/comments', {
                text,
                articleId:article?.id,
                userId: user?.id
            });

            if(!response.data) return rejectWithValue('send-comment-failure');
            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error) {
            return rejectWithValue('send-comment-failure');
     
        }
    
    }
);