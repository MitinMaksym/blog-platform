import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ArticleDetailsComments } from '@/features/ArticleDetailsComments';
import { Page } from '@/widgets/Page';
import { ArticleRecommendations } from '@/features/ArticleRecommendations';
import { ArticleRating } from '@/features/ArticleRating';
import { VStack } from '@/shared/ui/Stack';

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

        <Page>
            <VStack gap='16' align='stretch'>
                <ArticleDetails id={id} />
                <ArticleRating id={id}/>
                <ArticleRecommendations />
                <ArticleDetailsComments id={id}/>
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);