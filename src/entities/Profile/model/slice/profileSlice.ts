import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    data: null,
    loading: false,
    readonly: true,
    error: null
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;