import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, 
    ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
    
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile:  profileReducer
};
const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const {t} = useTranslation('profile');

    return <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames(cls.profilePage, {}, [className])}>
            {t('profile-page-title')}
        </div></DynamicModuleLoader>;
};

export default ProfilePage;