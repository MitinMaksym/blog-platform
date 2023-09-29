import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleView } from '@/entities/Article';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const initialState: ArticlesPageSchema = {
    loading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: 'GRID',
    page: 1,
    hasMore: false,
    limit: 9,
    _inited: false,
};

const articlesAdapter = createEntityAdapter<Article>();

export const ArticlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState(initialState),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
        },

        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },

        initState: (state) => {
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.loading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.loading = false;
                state.hasMore = action.payload.length >= state.limit;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const articlesSelectors = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || initialState,
);

export const { actions: articlesPageActions } = ArticlesPageSlice;
export const { reducer: articlesPageReducer } = ArticlesPageSlice;
