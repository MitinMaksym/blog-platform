import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { selectProfileFormData } from '../../selectors/selectProfileFormData/selectProfileFormData';
import { ProfileError } from '../../consts/consts';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<Array<ProfileError>>>(
    'features/updateProfileData',
    async (_, { rejectWithValue, extra, getState }) => {
        const formData = selectProfileFormData(getState());
        const errors = validateProfileData(formData);
        if (errors.length > 0) return rejectWithValue(errors);
        try {
            const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue([ProfileError.SERVER_ERROR]);
        }
    },
);
