import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticlesPageView = (state: StateSchema) => state.articlesPage?.view || 'GRID';