import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = 
createAsyncThunk<Array<Comment>, string | undefined, ThunkConfig<string>>(
    'pages/fetchCommentsByArticleId',
    async (articleId , { rejectWithValue, extra }) => {
        try {
            if(!articleId) return rejectWithValue('articleId not found');
            const response = await extra.api.get<Array<Comment>>('/comments',{params:{
                articleId,
                _expand:'user'
            }});
            if(!response.data) throw new Error();
            return response.data;
        } catch (error) {
            return rejectWithValue('Error');
     
        }
    
    }
);