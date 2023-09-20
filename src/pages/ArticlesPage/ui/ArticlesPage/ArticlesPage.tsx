import { FC, memo, useCallback, } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticlesFilters as ArticlesFiltersType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ARTICLES_VIEW } from '@/shared/const/localstorage';
import { Page } from '@/widgets/Page';
import { ArticlesFilters } from '@/features/ArticlesFilters';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesSelectors, articlesPageReducer, articlesPageActions } from '../../model/slice/articlesPageSlice';
import { selectArticlesPageLoading } from '../../model/selectors/selectArticlesPageLoading/selectArticlesPageLoading';
import { selectArticlesPageView } from '../../model/selectors/selectArticlesPageView/selectArticlesPageView';
import { selectArticlesPageError } from '../../model/selectors/selectArticlesPageError/selectArticlesPageError';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = ({className}) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation('article-details');
    const articles = useSelector(articlesSelectors.selectAll);
    const loading = useSelector(selectArticlesPageLoading);
    const view = useSelector(selectArticlesPageView);
    const error = useSelector(selectArticlesPageError);

    const handleViewToggle = useCallback((view: ArticleView) => {
        localStorage.setItem(ARTICLES_VIEW, view);
        dispatch(articlesPageActions.setView(view));
    },[dispatch]);

    const handleNextPageFetching = useCallback(() => {
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    const handleFiltersChange = useCallback((filters:  ArticlesFiltersType) => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({replace: true, filters}));
    }, [dispatch]);


    useInitialEffect(() => dispatch(initArticlesPage()));

    let content;

    if(error) {content = <Text title={t('failed-load-articles')} theme={TextTheme.ERROR}/>;}
    else {
        content = <> 
            <HStack gap='24' justify='between' align='start'>
                <ArticlesFilters onFilterChange={handleFiltersChange}/>
                <ArticleViewSwitcher view={view} onToggleView = {handleViewToggle}/>
            </HStack>
            
            <ArticleList view={view} articles={articles} loading={loading}/>
        </>;
    }


    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames('', {}, [className])} 
                data-testid = "ArticlesPage" onScrollEnd={handleNextPageFetching}>
                {content}
            </Page>
        </DynamicReducerLoader>
    );
};

export default memo(ArticlesPage);