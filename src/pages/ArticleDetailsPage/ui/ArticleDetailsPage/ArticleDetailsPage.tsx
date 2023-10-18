import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ArticleDetailsComments } from '@/features/ArticleDetailsComments';
import { Page } from '@/widgets/Page';
import { ArticleRecommendations } from '@/features/ArticleRecommendations';
import { ArticleRating } from '@/features/ArticleRating';
import { VStack } from '@/shared/ui/Stack';
import { toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = () => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <Text title={t('article-not-found')} theme={TextTheme.ERROR} />;
    }
    const articleRating = toggleFeatures({
        name: 'isArticleRatingEnabled',
        on: () => <ArticleRating id={id} />,
        off: () => (
            <div>
                <Card>{`Rating feature will be available soon`}</Card>
            </div>
        ),
    });
    return (
        <Page>
            <VStack gap='16' align='stretch'>
                <ArticleDetails id={id} />
                {articleRating}
                <ArticleRecommendations />
                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
