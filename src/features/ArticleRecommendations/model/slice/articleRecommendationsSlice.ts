import { StateSchema } from 'app/providers/StoreProvider';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { AricleRecommendationsSchema } from '../types/articleRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const initialState: AricleRecommendationsSchema = {
    loading: false,
    error: undefined,
    ids: [],
    entities: {}
};

const articleRecommendationsAdapter = createEntityAdapter<Article>();
  

export const ArticlesPageSlice = createSlice({
    name: 'articleRecommendations',
    initialState: articleRecommendationsAdapter.getInitialState(initialState),
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.loading = true;
                state.error = undefined;


            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                articleRecommendationsAdapter.setAll(state, action.payload); 
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload;

            });
    }

   
});

export const articleRecommendationsSelectors = articleRecommendationsAdapter.getSelectors<StateSchema>(state => 
    state.aricleRecommendations || initialState);



export const { actions: articleRecommendationsActions } = ArticlesPageSlice;
export const { reducer: articleRecommendationsReducer } = ArticlesPageSlice;