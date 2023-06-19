import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/AddCommentForm';
import { selectArticleDetailsCommentsLoading } 
    from '../../model/selectors/selectArticleDetailsCommentsLoading/selectArticleDetailsCommentsLoading';
import { articleDetailsCommentsReducer, commentsSelectors } from '../../model/slice/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { selectArticleDetailsCommentsError } 
    from '../../model/selectors/selectArticleDetailsCommentsError/selectArticleDetailsCommentsError';

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
    const loading = useSelector(selectArticleDetailsCommentsLoading);
    const error = useSelector(selectArticleDetailsCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const sendCommentHandler = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    },[dispatch]);

    let content;

    if(!id){
        content = <Text title={t('article-not-found')} theme={TextTheme.ERROR}/>;
    }

    else if(error){
        content =  <Text title={t(error)} theme={TextTheme.ERROR}/>;
    } else {
        content = (
            <> 
                <ArticleDetails id={id} className={cls.articleDetails}/>
                <Text className={cls.commentsTitle} title={t('comments')}/>
                <AddCommentForm loading={loading} onSubmit={sendCommentHandler}/>
                <CommentList comments={comments} loading={loading}/>
            </>);
    }

    return (
        <DynamicReducerLoader reducers={asyncReducers} removeAfterUnmount>
            <div className = {classNames(cls.articleDetailsPage, {}, [])}>
                {content}
            </div>
        </DynamicReducerLoader>
    );
};

export default memo(ArticleDetailsPage);