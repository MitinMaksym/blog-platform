import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon/Icon';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { selectArticleDetailsError } from '../../model/selectors/selectArticleDetailsError/selectArticleDetailsError';
import { selectArticleDetailsLoading } 
    from '../../model/selectors/selectArticleDetailsLoading/selectArticleDetailsLoading';
import { selectArticleDetailsData } from '../../model/selectors/selectArticleDetailsData/selectArticleDetailsData';
import { ArticleBlock } from '../../model/types/article';

import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';


interface ArticleDetailsProps {
   id: string
   className?: string;
}
const asyncReducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

const renderBlock = (block: ArticleBlock) => {
    switch(block.type){
    case 'CODE':
        return <ArticleCodeBlock key={block.id} className={cls.block}  block={block}/>;
    case 'IMAGE':
        return <ArticleImageBlock key={block.id} className={cls.block}  block={block}/>;
    case 'TEXT':
        return <ArticleTextBlock key={block.id} className={cls.block}  block={block}/>;

    default: return null;

    }
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { id, className } = props;
    const { t } = useTranslation('article-details');
    const error = useSelector(selectArticleDetailsError);
    const loading = useSelector(selectArticleDetailsLoading);
    const article = useSelector(selectArticleDetailsData);

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
        content = (
            <>
                <div className={cls.header}>
                    <Avatar 
                        className={cls.avatar}
                        src={article?.img} 
                        size = {200} 
                        align="center"/>
                    <Text 
                        className={cls.title} 
                        title={article?.title} 
                        text={article?.subtitle} size="sizeL"/>
                    <div className={cls.articleInfo}>
                        <Icon SVG={EyeIcon}/>
                        <Text title={String(article?.views)}/>
                    </div>
                    <div className={cls.articleInfo}>
                        <Icon SVG={CalendarIcon}/>
                        <Text title={String(article?.createdAt)}/>
                    </div>
                </div>
                <div className={cls.blocks}>
                    {article?.blocks.map(renderBlock)}
                </div>
            </> 
         
        );
    }

    return (
        <DynamicReducerLoader reducers={asyncReducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicReducerLoader>
    );
});