import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDataByIdQuery } from '../../../api/userApi';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../../types/userSchema';

export const initUserData = createAsyncThunk<User, string | null, ThunkConfig<string>>(
    'entities/user/initUserData',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            if (!id) {
                return rejectWithValue('not authenticated');
            }
            const userData = await dispatch(getUserDataByIdQuery(id)).unwrap();

            return userData;
        } catch (error) {
            return rejectWithValue('failed to init user data');
        }
    },
);
