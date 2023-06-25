import { StateSchema } from 'app/providers/StoreProvider';
import { selectArticlesPageError } from './selectArticlesPageError';

describe('selectArticlesPageError', () => {
    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {articlesPage: {error: 'Error'}};
        expect(selectArticlesPageError(state as StateSchema)).toBe('Error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticlesPageError(state as StateSchema)).toBe(undefined);
    });
});