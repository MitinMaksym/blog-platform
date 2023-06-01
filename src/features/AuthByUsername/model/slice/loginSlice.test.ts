import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';


describe('LoginSlice', () => {

    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {username:''};
        expect(loginReducer(state as LoginSchema, 
            loginActions.setUsername('name'))).toEqual({username:'name'});
    });

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {password:''};
        expect(loginReducer(state as LoginSchema, 
            loginActions.setPassword('123'))).toEqual({password:'123'});
    });
});