import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import i18n from 'shared/config/i18n/i18n';

export const fetchProfileData = 
createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'features/fetchProfileData',
    async (_, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');
            if(!response.data) throw new Error();
            
            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('data-load-fail-error'));
     
        }
    
    }
);