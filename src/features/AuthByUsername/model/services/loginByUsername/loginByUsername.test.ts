import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { User, userActions } from '@/entities/User';
import { loginByUsername, LoginByUsernameProps } from './loginByUsername';

jest.mock('axios');

describe('loginByUsername', () => {
  
    const userData = {id: '1', username:'test'};

    test('login success', async () => {
        const thunk = new TestAsyncThunk<User, LoginByUsernameProps, string>(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({data: userData}));
        const result = await thunk.callThunk({username: 'test', 'password':'123'});
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.payload).toEqual(userData);
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    });

    test('login error', async () => {
        const thunk = new TestAsyncThunk<User, LoginByUsernameProps, string>(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk({username: 'test', 'password':'123'});
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual('login-error');
    });
});