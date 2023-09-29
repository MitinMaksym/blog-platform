import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';
import { selectUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleRatingProps {
    id: string;
    className?: string;
}

export const ArticleRating: FC<ArticleRatingProps> = memo((props) => {
    const { id, className } = props;
    const { t } = useTranslation('article-details');
    const user = useSelector(selectUserAuthData);
    const { data, isLoading, isFetching } = useGetArticleRatingQuery(
        { articleId: id, userId: user?.id || '' },
        { refetchOnMountOrArgChange: true },
    );
    const [rateArticle, { isLoading: rateMutationLoading }] = useRateArticleMutation();

    if (isLoading) return <Skeleton />;

    const submitArticleRate = (rate: number, feedback?: string) => {
        rateArticle({ feedback, rate, articleId: id, userId: user?.id || '' });
    };

    return (
        <div className={className}>
            <RatingCard
                rating={data?.[0]?.rate}
                title={t('article-feedback')}
                loading={rateMutationLoading || isFetching}
                onSubmit={submitArticleRate}
            />
        </div>
    );
});
