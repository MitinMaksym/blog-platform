import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';
import { ARTICLES_VIEW } from '@/shared/const/localstorage';
import { selectArticlesPageInit } from '../../selectors/selectArticlesPageInit/selectArticlesPageInit';
import { articlesPageActions } from '../../slice/articlesPageSlice';


export const initArticlesPage = 
createAsyncThunk<void, void, ThunkConfig<string>>(
    'pages/initArticlesPage',
    async (_, { getState, dispatch }) => {
        const inited = selectArticlesPageInit(getState());
        const { setView, initState } = articlesPageActions;

        if(!inited){
            const articlesView = localStorage.getItem(ARTICLES_VIEW) as ArticleView || 'GRID';
            dispatch(setView(articlesView));
            dispatch(initState());

        }
    }
);