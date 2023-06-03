import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_DATA_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    authData: undefined
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },

        initAuthData: (state) => {
            const userData = localStorage.getItem(USER_DATA_KEY);
            if(userData){
                state.authData = JSON.parse(userData);
            }
        },

        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_DATA_KEY);
        },

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
