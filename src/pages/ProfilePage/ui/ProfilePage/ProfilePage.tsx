import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditProfile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/Text/Text';
    
interface ProfilePageProps {
    className?: string;
}


const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const {t} = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if(!id){
        return  (
            <Page className = {classNames('', {}, [className])}>
                <Text title={t('profile-not-found')}/>
            </Page>);
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <Text title={t('profile-page-title')}/>
            <EditableProfileCard id={id}/>
        </Page>);
};

export default memo(ProfilePage);