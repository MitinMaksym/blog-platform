import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticleDetailsLoading } from './selectArticleDetailsLoading';

describe('selectArticleDetailsLoading', () => {
    test('should return article loading state', () => {
        const state: DeepPartial<StateSchema> = { articleDetails: { loading: true } };
        expect(selectArticleDetailsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsLoading(state as StateSchema)).toBe(false);
    });
});
