import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticlesFilters } from '@/entities/Article';
import { selectArticlesPageLimit } from '../../selectors/selectArticlesPageLimit/selectArticlesPageLimit';
import { selectArticlesCurrentPage } from '../../selectors/selectArticlesCurrentPage/selectArticlesCurrentPage';

export interface FetchArticlesListProps {
    replace?: boolean
    filters?: ArticlesFilters
}

export const fetchArticlesList = 
createAsyncThunk<Array<Article>, FetchArticlesListProps, ThunkConfig<string>>(
    'pages/fetchArticlesList',
    async ({filters}, { rejectWithValue, extra, getState }) => {
        
        try {
            const limit = selectArticlesPageLimit(getState());
            const page = selectArticlesCurrentPage(getState());

            const response = await extra.api.get<Array<Article>>('/articles', { params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _order: filters?.order || 'asc',
                _sort: filters?.sort || 'createdAt',
                type_like: filters?.type  === 'ALL' ? undefined : filters?.type,
                q: filters?.search || undefined
            }});
           
            if(!response.data) return rejectWithValue('Error');
            return response.data;
        } catch (error) {
            return rejectWithValue('Error');
     
        }
    
    }
);