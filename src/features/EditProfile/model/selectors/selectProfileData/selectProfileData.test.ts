import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileData } from './selectProfileData';

describe('selectProfileData', () => {
    test('should return profile data', () => {
        const data = {username: 'Test'};
        const state:DeepPartial<StateSchema> = {profile: {data}};
        expect(selectProfileData(state as StateSchema)).toBe(data);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectProfileData(state as StateSchema)).toBe(undefined);
    });
});