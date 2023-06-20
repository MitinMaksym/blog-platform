import { StateSchema } from 'app/providers/StoreProvider';
import { selectArticleCommentFormText } from './selectArticleCommentFormText';

describe('selectArticleCommentFormText', () => {
    test('should return comment form value', () => {
        const state:DeepPartial<StateSchema> = {articleDetailsComments: {text: 'Text'}};
        expect(selectArticleCommentFormText(state as StateSchema)).toBe('Text');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(selectArticleCommentFormText(state as StateSchema)).toBe('');
    });
});