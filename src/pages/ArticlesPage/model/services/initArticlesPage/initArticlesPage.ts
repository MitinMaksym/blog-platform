import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { ARTICLES_VIEW } from 'shared/const/localstorage';
import { selectArticlesCurrentPage } from '../../selectors/selectArticlesCurrentPage/selectArticlesCurrentPage';
import { selectArticlesPageInit } from '../../selectors/selectArticlesPageInit/selectArticlesPageInit';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';


export const initArticlesPage = 
createAsyncThunk<void, void, ThunkConfig<string>>(
    'pages/initArticlesPage',
    async (_, { getState, dispatch }) => {
        const inited = selectArticlesPageInit(getState());
        const currentPage = selectArticlesCurrentPage(getState());
        const { setView, initState } = articlesPageActions;

        if(!inited){
            const articlesView = localStorage.getItem(ARTICLES_VIEW) as ArticleView || 'GRID';
            dispatch(setView(articlesView));
            dispatch(fetchArticlesList({ page: currentPage || 1 }));
            dispatch(initState());

        }
    }
);