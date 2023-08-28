import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticlesPageView } from './selectArticlesPageView';

describe('selectArticlesPageView', () => {
    test('should return articles view', () => {
        const state:DeepPartial<StateSchema> = {articlesPage: {view: 'GRID'}};
        expect(selectArticlesPageView(state as StateSchema)).toBe('GRID');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticlesPageView(state as StateSchema)).toBe('GRID');
    });
});