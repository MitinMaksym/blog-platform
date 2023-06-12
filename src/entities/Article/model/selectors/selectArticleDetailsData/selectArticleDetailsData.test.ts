import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';
import { selectArticleDetailsData } from './selectArticleDetailsData';

describe('selectArticleDetailsData', () => {
    test('should return article data', () => {
        const data: DeepPartial<Article> = {id: 'id', title: 'Title', };
        const state:DeepPartial<StateSchema> = {articleDetails: {data}};
        expect(selectArticleDetailsData(state as StateSchema)).toBe(data);
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsData(state as StateSchema)).toBe(undefined);
    });
});