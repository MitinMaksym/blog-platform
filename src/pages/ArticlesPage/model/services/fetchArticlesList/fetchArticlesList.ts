import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { selectArticlesPageLimit } from '../../selectors/selectArticlesPageLimit/selectArticlesPageLimit';

export interface FetchArticlesListProps {
    page: number
}

export const fetchArticlesList = 
createAsyncThunk<Array<Article>, FetchArticlesListProps, ThunkConfig<string>>(
    'pages/fetchArticlesList',
    async ({page}, { rejectWithValue, extra, getState }) => {
        try {
            const limit = selectArticlesPageLimit(getState());

            const response = await extra.api.get<Array<Article>>('/articles', { params: {
                _expand: 'user',
                _page: page,
                _limit: limit
            }});

            if(!response.data) return rejectWithValue('Error');
            return response.data;
        } catch (error) {
            return rejectWithValue('Error');
     
        }
    
    }
);