import { StateSchema } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';
import { selectArticleDetailsCanEdit } from './selectArticleDetailsCanEdit';

describe('selectArticleDetailsCanEdit', () => {
    test("should return true if article author's id is equal to logged user", () => {
        const data: DeepPartial<Article> = { id: 'id', title: 'Title', user: { id: '1' } };
        const state: DeepPartial<StateSchema> = { articleDetails: { data }, user: { authData: { id: '1' } } };
        expect(selectArticleDetailsCanEdit(state as StateSchema)).toBe(true);
    });

    test("should return false if article author's id is not equal to logged user", () => {
        const data: DeepPartial<Article> = { id: 'id', title: 'Title', user: { id: '1' } };
        const state: DeepPartial<StateSchema> = { articleDetails: { data }, user: { authData: { id: '2' } } };
        expect(selectArticleDetailsCanEdit(state as StateSchema)).toBe(false);
    });
});
