import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticlesPageLoading } from './selectArticlesPageLoading';

describe('selectArticlesPageLoading', () => {
    test('should return loading state', () => {
        const state:DeepPartial<StateSchema> = {articlesPage: {loading: true}};
        expect(selectArticlesPageLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticlesPageLoading(state as StateSchema)).toBe(false);
    });
});