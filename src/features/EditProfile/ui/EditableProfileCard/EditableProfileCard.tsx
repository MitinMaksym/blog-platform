import { Profile, ProfileCard } from 'entities/Profile';
import { FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { selectProfileFormData } from '../../model/selectors/selectProfileFormData/selectProfileFormData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { selectProfileErrors} 
    from '../../model/selectors/selectProfileErrors/selectProfileErrors';
import { selectProfileLoading } from '../../model/selectors/selectProfileLoading/selectProfileLoading';
import { selectProfileReadOnly } from '../../model/selectors/selectProfileReadOnly/selectProfileReadOnly';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
// import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileError } from '../../model/types/profileSchema';

import cls from './EditableProfileCard.module.scss';


interface EditableProfileCardProps {
    className?: string;
}
const reducers: ReducersList = {
    profile:  profileReducer
};


export const EditableProfileCard: FC<EditableProfileCardProps> = memo(() => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(selectProfileFormData);
    const loading = useSelector(selectProfileLoading);
    const errors = useSelector(selectProfileErrors);
    const readOnly = useSelector(selectProfileReadOnly);

    const buttonsVisible = !loading;

    const errorsTranslations = {
        [ProfileError.INCORRECT_USER_DATA]: t('incorrect-user-data'),
        [ProfileError.INCORRECT_COUNTRY]: t('incorrect-country'),
        [ProfileError.SERVER_ERROR]: t('server-error'),
        [ProfileError.NO_DATA]: t('no-data-error'),
        [ProfileError.INCORRECT_AGE]: t('incorrect-age'),
    };


    useEffect(() => {
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const formChangeHandler = useCallback((data: Profile)=> {
        dispatch(profileActions.setProfileForm(data));
    },[dispatch]);

    const saveProfile = useCallback(() => dispatch(updateProfileData()),[dispatch]);
    const cancelFormEdit = useCallback(() => dispatch(profileActions.cancelFormEdit()),[dispatch]);
    const allowFormEdit = useCallback(() => dispatch(profileActions.setReadOnly(false)),[dispatch]);

    return <div className={cls.cardWrapper}>
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            {!!errors?.length && errors?.map(err => 
                <Text key={err} title={t('error-occured')} text={errorsTranslations[err]} theme={TextTheme.ERROR}/>)}

            <ProfileCard 
                data={formData} 
                className={cls.profileCard} 
                loading={loading} 
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
        </DynamicReducerLoader>
    </div>;
});