import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    loading: false,
    editMode: false,
    errors: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setEditMode: (state, action: PayloadAction<boolean>) => {
            state.editMode = action.payload;
        },

        setProfileForm: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelFormEdit: (state) => {
            state.form = state.data;
            state.editMode = false;
            state.errors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.loading = true;
                state.errors = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.loading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.loading = true;
                state.errors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.editMode = false;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.loading = false;
                state.errors = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
