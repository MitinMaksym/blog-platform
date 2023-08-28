import { StateSchema } from '@/app/providers/StoreProvider';
import { selectProfileEditMode } from './selectProfileEditMode';

describe('selectProfileEditMode', () => {
    test('should return editMode value', () => {
        const state:DeepPartial<StateSchema> = {profile:{editMode:true}};
        expect(selectProfileEditMode(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectProfileEditMode(state as StateSchema)).toBe(false);
    });
});