import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EditableProfileCard, selectProfileErrors } from '@/features/EditProfile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text';
import { ProfileRating } from '@/features/ProfileRating';
import { VStack } from '@/shared/ui/Stack';
import { selectUserAuthData } from '@/entities/User';
    
interface ProfilePageProps {
  className?: string;
}


const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const {t} = useTranslation('profile');
    const { id } = useParams<{id: string}>();
    const user = useSelector(selectUserAuthData);
    const profileErrors = useSelector(selectProfileErrors);
    const canRateProfile = id !== user?.id && !profileErrors;

    if(!id){
        return  (
            <Page className = {classNames('', {}, [className])}>
                <Text title={t('profile-not-found')}/>
            </Page>);
    }

    return (
        <Page className={classNames('', {}, [className])} data-testid = "ProfilePage">
            <VStack align="stretch" gap="16">
                <Text title={t('profile-page-title')} />
                <EditableProfileCard id={id} />
                {canRateProfile && <ProfileRating id={id} />}
            </VStack>
        </Page>
    );
};

export default memo(ProfilePage);