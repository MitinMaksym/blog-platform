import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Profile, ProfileCard } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicReducerLoader, ReducersList } from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { selectProfileCanEdit } from '../../model/selectors/selectProfileCanEdit/selectProfileCanEdit';
import { selectProfileFormData } from '../../model/selectors/selectProfileFormData/selectProfileFormData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { selectProfileErrors } from '../../model/selectors/selectProfileErrors/selectProfileErrors';
import { selectProfileLoading } from '../../model/selectors/selectProfileLoading/selectProfileLoading';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { ProfileError } from '../../model/consts/consts';

import { selectProfileEditMode } from '../../model/selectors/selectProfileEditMode/selectProfileEditMode';

import cls from './EditableProfileCard.module.scss';
import { EditableProfileCardButtons } from '../EditableProfileCardButtons/EditableProfileCardButtons';

interface EditableProfileCardProps {
    id: string;
    className?: string;
}
const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(selectProfileFormData);
    const loading = useSelector(selectProfileLoading);
    const errors = useSelector(selectProfileErrors);
    const editMode = useSelector(selectProfileEditMode);
    const canEdit = useSelector(selectProfileCanEdit);
    const { id } = props;
    const serverError = errors?.includes(ProfileError.SERVER_ERROR);
    const actionButtonsVisible = !loading && canEdit;

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

    const formChangeHandler = useCallback(
        (data: Profile) => {
            dispatch(profileActions.setProfileForm(data));
        },
        [dispatch],
    );

    const saveProfile = useCallback(() => dispatch(updateProfileData()), [dispatch]);
    const cancelFormEdit = useCallback(() => dispatch(profileActions.cancelFormEdit()), [dispatch]);
    const setEditMode = useCallback(() => dispatch(profileActions.setEditMode(true)), [dispatch]);

    let content;

    if (serverError) content = <Text title={t('fetch-profile-error')} theme={TextTheme.ERROR} />;
    else {
        content = (
            <>
                {' '}
                {!!errors?.length &&
                    errors?.map((err) => (
                        <Text
                            key={err}
                            title={t('error-occured')}
                            text={errorsTranslations[err]}
                            theme={TextTheme.ERROR}
                            data-testid='EditableProfileCard.Error'
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    className={cls.profileCard}
                    loading={loading}
                    readOnly={!editMode}
                    onChange={formChangeHandler}
                />
                <EditableProfileCardButtons
                    visible={actionButtonsVisible}
                    editMode={editMode}
                    onSave={saveProfile}
                    onSetEditMode={setEditMode}
                    onCancel={cancelFormEdit}
                />
            </>
        );
    }

    return (
        <div data-testid='EditableProfileCard' className={cls.cardWrapper}>
            <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
                {content}
            </DynamicReducerLoader>
        </div>
    );
});
