import { EditableProfileCard } from 'features/EditProfile';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
    
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}


const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const {t} = useTranslation('profile');

    return <div className={classNames(cls.profilePage, {}, [className])}>
        <Text title={t('profile-page-title')}/>
        <EditableProfileCard/>
    </div>;
};

export default memo(ProfilePage);