import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileError } from '../../consts/consts';
import { selectProfileErrors } from './selectProfileErrors';

describe('selectProfileErrors', () => {
    test('should return profile errors', () => {
        const errors =  [ProfileError.INCORRECT_AGE];
        const state:DeepPartial<StateSchema> = {profile:{errors}};
        expect(selectProfileErrors(state as StateSchema)).toEqual(errors);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectProfileErrors(state as StateSchema)).toBe(undefined);
    });
});