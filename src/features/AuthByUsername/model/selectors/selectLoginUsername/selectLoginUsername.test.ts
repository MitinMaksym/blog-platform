import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginUsername } from './selectLoginUsername';

describe('selectLoginUsername', () => {
    test('should return username', () => {
        const state:DeepPartial<StateSchema> = {loginForm: {username:'test'}};
        expect(selectLoginUsername(state as StateSchema)).toBe('test');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectLoginUsername(state as StateSchema)).toBe('');
    });
});