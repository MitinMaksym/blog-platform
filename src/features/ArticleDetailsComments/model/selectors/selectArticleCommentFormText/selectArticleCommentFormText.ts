import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleCommentFormText = (state: StateSchema) => state.articleDetailsComments?.text ?? '';