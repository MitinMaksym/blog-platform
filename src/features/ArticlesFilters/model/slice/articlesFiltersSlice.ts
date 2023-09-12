import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { ArticlesFiltersSchema } from '../types/articleFiltersSchema';


export const initialState: ArticlesFiltersSchema = {
    filters: {
        search: '',
        sort: 'createdAt',
        order: 'asc',
        type: 'ALL'
    }
   
};

export const articlesFiltersSlice = createSlice({
    name: 'articlesFilters',
    initialState,
    reducers: {

        setSearch: (state, action:PayloadAction<string>) => {
            state.filters.search = action.payload;
        },

        setSort: (state, action:PayloadAction<ArticlesSortField>) => {
            state.filters.sort = action.payload;
        },

        setOrder: (state, action:PayloadAction<SortOrder>) => {
            state.filters.order = action.payload;
        },

        setType: (state, action:PayloadAction<ArticleType>) => {
            state.filters.type = action.payload;
        },

    },
});

export const { actions: articlesFiltersActions } = articlesFiltersSlice;
export const { reducer: articlesFiltersReducer } = articlesFiltersSlice;
