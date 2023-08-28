import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticlesPageLimit } from './selectArticlesPageLimit';

describe('selectArticlesPageLimit', () => {
    test('should return page limit', () => {
        const state:DeepPartial<StateSchema> = {articlesPage: {limit: 10}};
        expect(selectArticlesPageLimit(state as StateSchema)).toBe(10);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticlesPageLimit(state as StateSchema)).toBe(undefined);
    });
});