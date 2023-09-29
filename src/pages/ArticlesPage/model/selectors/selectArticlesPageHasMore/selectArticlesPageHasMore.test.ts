import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticlesPageHasMore } from './selectArticlesPageHasMore';

describe('selectArticlesPageHasMore', () => {
    test('should return hasMore', () => {
        const state: DeepPartial<StateSchema> = { articlesPage: { hasMore: true } };
        expect(selectArticlesPageHasMore(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticlesPageHasMore(state as StateSchema)).toBe(false);
    });
});
