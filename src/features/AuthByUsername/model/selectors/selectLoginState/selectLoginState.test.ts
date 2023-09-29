import { StateSchema } from '@/app/providers/StoreProvider';
import { selectLoginState } from './selectLoginState';

describe('selectLoginState', () => {
    test('should return login state', () => {
        const formState = {
            error: 'Error',
            loading: false,
            username: 'Test',
            password: '123',
        };
        const state: DeepPartial<StateSchema> = {
            loginForm: formState,
        };
        expect(selectLoginState(state as StateSchema)).toEqual(formState);
    });
});
