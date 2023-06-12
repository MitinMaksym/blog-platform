import { StateSchema } from 'app/providers/StoreProvider';
import { selectArticleDetailsError } from './selectArticleDetailsError';

describe('selectArticleDetailsError', () => {
    test('should return article error', () => {
        const state:DeepPartial<StateSchema> = {articleDetails: {error: 'Error'}};
        expect(selectArticleDetailsError(state as StateSchema)).toBe('Error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsError(state as StateSchema)).toBe(undefined);
    });
});