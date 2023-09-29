import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticlesPageInit } from './selectArticlesPageInit';

describe('selectArticlesPageInit', () => {
    test('should return init state', () => {
        const state: DeepPartial<StateSchema> = { articlesPage: { _inited: true } };
        expect(selectArticlesPageInit(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticlesPageInit(state as StateSchema)).toBe(false);
    });
});
