import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticlesPageLoading = (state: StateSchema) => state.articlesPage?.loading || false;