import { Profile, ProfileCard } from 'entities/Profile';
import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { selectProfileFormData } from '../../model/selectors/selectProfileFormData/selectFormData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { selectProfileError } from '../../model/selectors/selectProfileError/selectProfileError';
import { selectProfileLoading } from '../../model/selectors/selectProfileLoading/selectProfileLoading';
import { selectProfileReadOnly } from '../../model/selectors/selectProfileReadOnly/selectProfileReadOnly';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
// import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    className?: string;
}
const reducers: ReducersList = {
    profile:  profileReducer
};
export const EditableProfileCard: FC<EditableProfileCardProps> = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(selectProfileFormData);
    const loading = useSelector(selectProfileLoading);
    const error = useSelector(selectProfileError);
    const readOnly = useSelector(selectProfileReadOnly);

    const buttonsVisible = !error && !loading;


    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const formChangeHandler = useCallback((data: Profile)=> {
        dispatch(profileActions.setProfileForm(data));
    },[dispatch]);

    const saveProfile = useCallback(() => dispatch(updateProfileData()),[dispatch]);
    const cancelFormEdit = useCallback(() => dispatch(profileActions.cancelFormEdit()),[dispatch]);
    const allowFormEdit = useCallback(() => dispatch(profileActions.setReadOnly(false)),[dispatch]);

    return <div className={cls.cardWrapper}>
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ProfileCard 
                data={formData} 
                className={cls.profileCard} 
                loading={loading} 
                error={error} 
                readOnly = {readOnly} 
                onChange={formChangeHandler}/>

            {buttonsVisible && <div className={cls.buttons}>
                {readOnly ? 
                    <Button onClick={allowFormEdit}>{t('edit')}</Button> : 
                    <>
                        <Button onClick={saveProfile}>{t('save')}</Button>
                        <Button variant={BtnVariant.OUTLINE_ERROR} onClick={cancelFormEdit}>{t('cancel')}</Button>
                    </>}
            </div>
            }
        </DynamicModuleLoader>
    </div>;
};