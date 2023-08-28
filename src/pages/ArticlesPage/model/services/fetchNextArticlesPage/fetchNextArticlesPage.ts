import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectArticlesCurrentPage } from '../../selectors/selectArticlesCurrentPage/selectArticlesCurrentPage';
import { selectArticlesPageHasMore } from '../../selectors/selectArticlesPageHasMore/selectArticlesPageHasMore';
import { selectArticlesPageLoading } from '../../selectors/selectArticlesPageLoading/selectArticlesPageLoading';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';


export const fetchNextArticlesPage = 
createAsyncThunk<void, void, ThunkConfig<string>>(
    'pages/fetchNextArticlesPage',
    async (_, { getState, dispatch }) => {
        const hasMore = selectArticlesPageHasMore(getState());
        const loading = selectArticlesPageLoading(getState());
        const currentPage = selectArticlesCurrentPage(getState());

        if(hasMore && !loading) {
            dispatch(articlesPageActions.setPage(currentPage + 1));
            dispatch(fetchArticlesList({}));
        }
    
    }
);