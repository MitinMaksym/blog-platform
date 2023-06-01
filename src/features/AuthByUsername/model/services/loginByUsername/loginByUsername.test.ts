import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { loginByUsername, LoginByUsernameProps } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  
    const userData = {id: '1', username:'test'};

    test('login success', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userData}));
        const thunk = new TestAsyncThunk<User, LoginByUsernameProps, string>(loginByUsername);
        const result = await thunk.callThunk({username: 'test', 'password':'123'});
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.payload).toEqual(userData);
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    });

    test('login error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
        const thunk = new TestAsyncThunk<User, LoginByUsernameProps, string>(loginByUsername);
        const result = await thunk.callThunk({username: 'test', 'password':'123'});
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual('login-error');
    });
});