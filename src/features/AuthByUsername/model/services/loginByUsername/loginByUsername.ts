import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_DATA_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string
    password: string
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue:string}>(
    'features/loginByUsername',
    async (authData, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', 
                authData, {headers:{'Content-Type':'application/json'}});

            if(!response.data) throw new Error();

            localStorage.setItem(USER_DATA_KEY, JSON.stringify(response.data));
            
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('login-error'));
     
        }
    
    }
);