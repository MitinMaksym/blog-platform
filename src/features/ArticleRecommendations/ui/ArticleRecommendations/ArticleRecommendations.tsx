import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { articleRecommendationsReducer, 
    articleRecommendationsSelectors } from '../../model/slice/articleRecommendationsSlice';
import { fetchArticleRecommendations } 
    from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import cls from './ArticleRecommendations.module.scss';

interface ArticleRecommendationsProps {
   className?: string;
}

const reducers: ReducersList = {
    aricleRecommendations: articleRecommendationsReducer
};

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { className } = props;
    const { t } = useTranslation('article-details');

    const articles = useSelector(articleRecommendationsSelectors.selectAll);

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.articleRecommendations, {}, [className])}>
                <Text title={t('recommendations')} className={cls.title}/>
                <ArticleList 
                    className={cls.list} 
                    articles={articles} 
                    view="GRID" 
                    loading={false} 
                    target="_blank"/>
            </div>
        </DynamicReducerLoader>
    );
});