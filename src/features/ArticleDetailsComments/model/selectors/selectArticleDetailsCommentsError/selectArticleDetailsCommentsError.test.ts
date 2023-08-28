import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticleDetailsCommentsError } from './selectArticleDetailsCommentsError';

describe('selectArticleDetailsCommentsError', () => {
    test('should return article comments error', () => {
        const state:DeepPartial<StateSchema> = {articleDetailsComments: {error: 'Error'}};
        expect(selectArticleDetailsCommentsError(state as StateSchema)).toBe('Error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsCommentsError(state as StateSchema)).toBe(undefined);
    });
});