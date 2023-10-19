import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setFeatureFlags } from '@/shared/lib/features';
import { User, UserSchema } from '../types/userSchema';
import { saveJsonSettings } from '../services/saveJsonSettings/saveJsonSettings';

const initialState: UserSchema = {
    authData: undefined,
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },

        initAuthData: (state, action: PayloadAction<UserSchema['authData']>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload?.features);
            state._inited = true;
        },

        logout: (state) => {
            state.authData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(saveJsonSettings.fulfilled, (state, { payload }) => {
            if (state.authData) {
                state.authData.jsonSettings = payload;
            }
        });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
