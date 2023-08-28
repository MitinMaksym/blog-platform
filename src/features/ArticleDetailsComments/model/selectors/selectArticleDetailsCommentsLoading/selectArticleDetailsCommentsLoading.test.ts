import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticleDetailsCommentsLoading } from './selectArticleDetailsCommentsLoading';

describe('selectArticleDetailsCommentsLoading', () => {
    test('should return article loading state', () => {
        const state:DeepPartial<StateSchema> = {articleDetailsComments: {loading: true}};
        expect(selectArticleDetailsCommentsLoading(state as StateSchema)).toBe(true);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsCommentsLoading(state as StateSchema)).toBe(false);
    });
});