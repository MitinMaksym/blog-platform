import { EditableProfileCard } from 'features/EditProfile';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import { Text } from 'shared/ui/Text/Text';
    
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}


const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const {t} = useTranslation('profile');
    const { id } = useParams<{id: string}>();

    if(!id){
        return  (
            <Page className = {classNames(cls.profilePage, {}, [])}>
                <Text title={t('profile-not-found')}/>
            </Page>);
    }

    return (
        <Page className={classNames(cls.profilePage, {}, [className])}>
            <Text title={t('profile-page-title')}/>
            <EditableProfileCard id={id}/>
        </Page>);
};

export default memo(ProfilePage);