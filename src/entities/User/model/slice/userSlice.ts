import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';

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
        },

        initAuthData: (state, action: PayloadAction<UserSchema['authData']>) => {
            state.authData = action.payload;
            state._inited = true;
        },

        logout: (state) => {
            state.authData = undefined;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
