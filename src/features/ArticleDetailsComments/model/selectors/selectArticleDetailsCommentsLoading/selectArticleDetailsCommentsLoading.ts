import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleDetailsCommentsLoading = (state: StateSchema) => 
    state.articleDetailsComments?.loading || false;