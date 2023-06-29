import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';


export const fetchArticleRecommendations = 
createAsyncThunk<Array<Article>, void, ThunkConfig<string>>(
    'features/fetchArticleRecommendations',
    async (_, { rejectWithValue, extra }) => {
        
        try {
            const response = await extra.api.get<Array<Article>>('/articles', { params: {
                _limit: 5,

            }});
           
            if(!response.data) return rejectWithValue('Error');
            return response.data;
        } catch (error) {
            return rejectWithValue('Error');
     
        }
    
    }
);