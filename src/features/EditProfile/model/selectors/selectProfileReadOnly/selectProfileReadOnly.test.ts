import { StateSchema } from 'app/providers/StoreProvider';
import { selectProfileReadOnly } from './selectProfileReadOnly';

describe('selectProfileReadOnly', () => {
    test('should return readOnly value', () => {
        const state:DeepPartial<StateSchema> = {profile:{readonly:true}};
        expect(selectProfileReadOnly(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectProfileReadOnly(state as StateSchema)).toBe(true);
    });
});