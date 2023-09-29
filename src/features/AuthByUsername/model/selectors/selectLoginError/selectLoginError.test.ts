import { StateSchema } from '@/app/providers/StoreProvider';
import { selectLoginError } from './selectLoginError';

describe('selectLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = { loginForm: { error: 'Error' } };
        expect(selectLoginError(state as StateSchema)).toBe('Error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginError(state as StateSchema)).toBe(undefined);
    });
});
