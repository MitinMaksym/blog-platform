import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import i18n from 'shared/config/i18n/i18n';
import { selectProfileFormData } from '../../selectors/selectProfileFormData/selectFormData';

export const updateProfileData = 
createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'features/updateProfileData',
    async (_, { rejectWithValue, extra, getState }) => {
        const formData = selectProfileFormData(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            if(!response.data) throw new Error();
            
            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('data-load-fail-error'));
     
        }
    
    }
);