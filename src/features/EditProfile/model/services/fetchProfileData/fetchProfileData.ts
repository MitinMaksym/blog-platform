import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ProfileValidationError } from '../../types/profileSchema';

export const fetchProfileData = 
createAsyncThunk<Profile, void, ThunkConfig<ProfileValidationError[]>>(
    'features/fetchProfileData',
    async (_, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');
            if(!response.data) throw new Error();
            
            return response.data;
        } catch (error) {
            return rejectWithValue([ProfileValidationError.SERVER_ERROR]);
     
        }
    
    }
);