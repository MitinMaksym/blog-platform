import { Profile, ProfileCard } from 'entities/Profile';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { BtnVariant, Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { selectProfileFormData } from '../../model/selectors/selectProfileFormData/selectProfileFormData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { selectProfileErrors} 
    from '../../model/selectors/selectProfileErrors/selectProfileErrors';
import { selectProfileLoading } from '../../model/selectors/selectProfileLoading/selectProfileLoading';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
// import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileError } from '../../model/types/profileSchema';

import cls from './EditableProfileCard.module.scss';
import { selectProfileEditMode } from '../../model/selectors/selectProfileEditMode/selectProfileEditMode';


interface EditableProfileCardProps {
    id: string
    className?: string;
}
const reducers: ReducersList = {
    profile:  profileReducer
};


export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(selectProfileFormData);
    const loading = useSelector(selectProfileLoading);
    const errors = useSelector(selectProfileErrors);
    const editMode = useSelector(selectProfileEditMode);
    const {id} = props;

    const buttonsVisible = !loading;

    const errorsTranslations = {
        [ProfileError.INCORRECT_USER_DATA]: t('incorrect-user-data'),
        [ProfileError.INCORRECT_COUNTRY]: t('incorrect-country'),
        [ProfileError.SERVER_ERROR]: t('server-error'),
        [ProfileError.NO_DATA]: t('no-data-error'),
        [ProfileError.INCORRECT_AGE]: t('incorrect-age'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    const formChangeHandler = useCallback((data: Profile)=> {
        dispatch(profileActions.setProfileForm(data));
    },[dispatch]);

    const saveProfile = useCallback(() => dispatch(updateProfileData(id)),[dispatch, id]);
    const cancelFormEdit = useCallback(() => dispatch(profileActions.cancelFormEdit()),[dispatch]);
    const allowFormEdit = useCallback(() => dispatch(profileActions.setEditMode(true)),[dispatch]);

    return <div className={cls.cardWrapper}>
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            {!!errors?.length && errors?.map(err => 
                <Text key={err} title={t('error-occured')} text={errorsTranslations[err]} theme={TextTheme.ERROR}/>)}

            <ProfileCard 
                data={formData} 
                className={cls.profileCard} 
                loading={loading} 
                readOnly = {!editMode} 
                onChange={formChangeHandler}/>

            {buttonsVisible && <div className={cls.buttons}>
                {
                    editMode ?   
                        <>
                            <Button onClick={saveProfile}>{t('save')}</Button>
                            <Button variant={BtnVariant.OUTLINE_ERROR} onClick={cancelFormEdit}>{t('cancel')}</Button>
                        </> :
                        <Button onClick={allowFormEdit}>{t('edit')}</Button> 
                }
            </div>
            }
        </DynamicReducerLoader>
    </div>;
});