import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { selectArticleDetailsError } from '../../model/selectors/selectArticleDetailsError';
import { selectArticleDetailsLoading } from '../../model/selectors/selectArticleDetailsLoading';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
   id: string
   className?: string;
}
const asyncReducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { id, className } = props;
    const { t } = useTranslation('article-details');
    const error = useSelector(selectArticleDetailsError);
    const loading = useSelector(selectArticleDetailsLoading);

    useEffect(() => {
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchArticleById(id));
        }
    }, [id, dispatch]);

    let content;

    if(loading){
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border='50%'/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.subTitle} width={600} height={24}/>
                <Skeleton className={cls.block} width='100%' height={200}/>
                <Skeleton className={cls.block} width='100%' height={200}/>
            </>
        );
    }
    else if(error){
        content = <Text 
            title={t('error-occured', {ns: 'translation'})} 
            text={t('failed-load-articles')} 
            align="center" 
            theme={TextTheme.ERROR}/>;
    } else {
        content = <Text title='Article details' align="center"/>;
    }

    return (
        <DynamicReducerLoader reducers={asyncReducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicReducerLoader>
    );
});