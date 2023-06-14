import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { articleDetailsCommentsReducer, commentsSelectors } from '../../model/slice/articleDetailsCommentsSlice';

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const asyncReducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(commentsSelectors.selectAll);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if(!id){
        return  <div className = {classNames(cls.articleDetailsPage, {}, [])}>
            <Text title={t('article-not-found')}/>
        </div>;
    }

    return (
        <DynamicReducerLoader reducers={asyncReducers} removeAfterUnmount>
            <div className = {classNames(cls.articleDetailsPage, {}, [])}>
                <ArticleDetails id={id} className={cls.articleDetails}/>
                <Text className={cls.commentsTitle} title={t('comments')}/>
                <CommentList comments={comments} loading={false}/>
            </div>
        </DynamicReducerLoader>
    );
};

export default memo(ArticleDetailsPage);