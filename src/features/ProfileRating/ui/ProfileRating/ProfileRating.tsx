import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { Skeleton } from '@/shared/ui/Skeleton';
import { selectUserAuthData } from '@/entities/User';
import { useGetProfileRatingQuery, useRateProfileMutation } from '../../api/articleRatingApi';

interface ProfileRatingProps {
    id: string;
    className?: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { id, className } = props;
    const { t } = useTranslation('profile');
    const user = useSelector(selectUserAuthData);
    const { data, isLoading, isFetching } = useGetProfileRatingQuery(
        { profileId: id, userId: user?.id || '' },
        { refetchOnMountOrArgChange: true },
    );
    const [rateArticle, { isLoading: rateMutationLoading }] = useRateProfileMutation();

    if (isLoading) return <Skeleton />;

    const submitProfileRate = (rate: number, feedback?: string) => {
        rateArticle({ feedback, rate, profileId: id, userId: user?.id || '' });
    };

    return (
        <div className={className}>
            <RatingCard
                rating={data?.[0]?.rate}
                title={t('profile-rating-title')}
                loading={rateMutationLoading || isFetching}
                onSubmit={submitProfileRate}
            />
        </div>
    );
});
