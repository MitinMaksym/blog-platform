import { StateSchema } from 'app/providers/StoreProvider';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';


const initialState: ArticleDetailsCommentsSchema = {
    loading: false,
    error: undefined,
    ids: [],
    entities: {}
};

const commentsAdapter = createEntityAdapter<Comment>();
  

export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.loading = true;
                state.error = undefined;

            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Array<Comment>>) => {
                state.loading = false; 
                commentsAdapter.setAll(state, action.payload);

            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.payload;

            });
    }
   
});

export const commentsSelectors = commentsAdapter.getSelectors<StateSchema>(state => 
    state.articleDetailsComments || initialState);



export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;