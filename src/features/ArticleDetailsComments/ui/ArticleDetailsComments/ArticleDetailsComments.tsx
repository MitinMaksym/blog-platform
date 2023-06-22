import { AddCommentForm, CommentList } from 'entities/Comment';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { 
    articleDetailsCommentsActions, 
    articleDetailsCommentsReducer, 
    commentsSelectors 
} from '../../model/slice/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsComments.module.scss';
import { selectArticleDetailsCommentsLoading } 
    from '../../model/selectors/selectArticleDetailsCommentsLoading/selectArticleDetailsCommentsLoading';
import { selectArticleCommentFormText } 
    from '../../model/selectors/selectArticleCommentFormText/selectArticleCommentFormText';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { selectArticleDetailsCommentsError } 
    from '../../model/selectors/selectArticleDetailsCommentsError/selectArticleDetailsCommentsError';

interface ArticleDetailsCommentsProps {
   id: string
   className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { id, className } = props;
    const text = useSelector(selectArticleCommentFormText);

    const comments = useSelector(commentsSelectors.selectAll);
    const loading = useSelector(selectArticleDetailsCommentsLoading);
    const error = useSelector(selectArticleDetailsCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const handleCommentTextChange = useCallback((text: string) => {
        dispatch(articleDetailsCommentsActions.setCommentText(text));
    }, [dispatch]);

    const sendCommentHandler = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    },[dispatch]);

    let content;

    if(error) content = <Text title={error} theme={TextTheme.ERROR}/>;
    else {
        content =  <>    
            <AddCommentForm 
                loading={loading} 
                value={text}
                className={cls.form} 
                onChange={handleCommentTextChange} 
                onSubmit={sendCommentHandler}/>
            <CommentList comments={comments} loading={loading}/>
        </>; 
    }
    


    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={classNames(cls.articleDetailsComments, {}, [className])}>
                {content}
            </div>
        </DynamicReducerLoader>
    );
});

export default ArticleDetailsComments;