import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ArticleDetailsComments } from 'features/ArticleDetailsComments';
import { Page } from 'widgets/Page';
import { ArticleRecommendations } from 'features/ArticleRecommendations';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}



const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();
    
    if(!id){
        return <Text title={t('article-not-found')} theme={TextTheme.ERROR}/>;
    }

    return (

        <Page className = {classNames(cls.articleDetailsPage, {}, [])}>         
            <ArticleDetails id={id} className={cls.articleDetails}/>
            <ArticleRecommendations className={cls.recommendations}/>
            <ArticleDetailsComments id={id}/>
        </Page>
    );
};

export default memo(ArticleDetailsPage);