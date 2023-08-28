import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleDetailsLoading = (state: StateSchema) => state.articleDetails?.loading || false;