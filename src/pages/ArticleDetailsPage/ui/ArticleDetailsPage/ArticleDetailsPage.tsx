import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { ArticleDetailsComments, selectArticleDetailsCommentsError } from 'features/ArticleDetailsComments';


import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}



const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    const error = useSelector(selectArticleDetailsCommentsError);

    if(!id){
        return <Text title={t('article-not-found')} theme={TextTheme.ERROR}/>;
    }

    if(error){
        return <Text title={t(error)} theme={TextTheme.ERROR}/>;
    } 

    return (

        <div className = {classNames(cls.articleDetailsPage, {}, [])}>
            
            <ArticleDetails id={id} className={cls.articleDetails}/>
            <Text className={cls.commentsTitle} title={t('comments')}/>
            <ArticleDetailsComments id={id}/>
        </div>
     
    );
};

export default memo(ArticleDetailsPage);