import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginLoading } from './selectLoginLoading';

describe('selectLoginLoading', () => {
    test('should return loading state', () => {
        const state:DeepPartial<StateSchema> = {loginForm: {loading:true}};
        expect(selectLoginLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectLoginLoading(state as StateSchema)).toBe(false);
    });
});