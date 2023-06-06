import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ProfileError } from '../../types/profileSchema';

export const fetchProfileData = 
createAsyncThunk<Profile, void, ThunkConfig<ProfileError[]>>(
    'features/fetchProfileData',
    async (_, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');
            if(!response.data) throw new Error();
            
            return response.data;
        } catch (error) {
            return rejectWithValue([ProfileError.SERVER_ERROR]);
     
        }
    
    }
);