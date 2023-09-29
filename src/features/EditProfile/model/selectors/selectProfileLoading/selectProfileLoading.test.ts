import { StateSchema } from '@/app/providers/StoreProvider';
import { selectProfileLoading } from './selectProfileLoading';

describe('selectProfileLoading', () => {
    test('should return profile loading', () => {
        const state: DeepPartial<StateSchema> = { profile: { loading: true } };
        expect(selectProfileLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileLoading(state as StateSchema)).toBe(false);
    });
});
