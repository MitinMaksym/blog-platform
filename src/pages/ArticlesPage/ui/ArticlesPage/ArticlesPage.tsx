import { ArticleList, ArticleView } from 'entities/Article';
import { FC, memo, useCallback, } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ARTICLES_VIEW } from 'shared/const/localstorage';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { selectArticlesCurrentPage } from '../../model/selectors/selectArticlesCurrentPage/selectArticlesCurrentPage';
import { articlesSelectors, articlesPageReducer, articlesPageActions } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { selectArticlesPageLoading } from '../../model/selectors/selectArticlesPageLoading/selectArticlesPageLoading';
import { selectArticlesPageView } from '../../model/selectors/selectArticlesPageView/selectArticlesPageView';
import { selectArticlesPageError } from '../../model/selectors/selectArticlesPageError/selectArticlesPageError';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation('article-details');
    const articles = useSelector(articlesSelectors.selectAll);
    const loading = useSelector(selectArticlesPageLoading);
    const view = useSelector(selectArticlesPageView);
    const error = useSelector(selectArticlesPageError);
    const currentPage = useSelector(selectArticlesCurrentPage);

    const handleViewToggle = useCallback((view: ArticleView) => {
        localStorage.setItem(ARTICLES_VIEW, view);
        dispatch(articlesPageActions.setView(view));
    },[dispatch]);

    const handleNextPageFetching = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);


    useInitialEffect(() => {
        const articlesView = localStorage.getItem(ARTICLES_VIEW) as ArticleView || 'GRID';
        dispatch(articlesPageActions.setView(articlesView));
        dispatch(fetchArticlesList({ page: currentPage || 1 }));
    });

    let content;

    if(error) {content = <Text title={t('failed-load-articles')} theme={TextTheme.ERROR}/>;}
    else {
        content = <> 
            <ArticleViewSwitcher view={view} onToggleView = {handleViewToggle}/>
            <ArticleList view={view} articles={articles} loading={loading}/>
        </>;
    }


    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page onScrollEnd={handleNextPageFetching}>
                {content}
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlesPage);