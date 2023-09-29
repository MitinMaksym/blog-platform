import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticlesCurrentPage } from './selectArticlesCurrentPage';

describe('selectArticlesCurrentPage', () => {
    test('should return current page', () => {
        const state: DeepPartial<StateSchema> = { articlesPage: { page: 1 } };
        expect(selectArticlesCurrentPage(state as StateSchema)).toBe(1);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticlesCurrentPage(state as StateSchema)).toBe(1);
    });
});
