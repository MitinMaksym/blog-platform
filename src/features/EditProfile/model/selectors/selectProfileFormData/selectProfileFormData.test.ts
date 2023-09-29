import { StateSchema } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { selectProfileFormData } from './selectProfileFormData';

describe('selectProfileFormData', () => {
    test('should return profile form data', () => {
        const formData: Profile = { first: 'First Name', age: 20 };
        const state: DeepPartial<StateSchema> = { profile: { form: formData } };
        expect(selectProfileFormData(state as StateSchema)).toEqual(formData);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileFormData(state as StateSchema)).toBe(undefined);
    });
});
