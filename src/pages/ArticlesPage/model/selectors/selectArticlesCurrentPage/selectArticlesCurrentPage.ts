import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticlesCurrentPage = (state: StateSchema) => state.articlesPage?.page || 1;