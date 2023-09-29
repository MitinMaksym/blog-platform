import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticlesPageInit = (state: StateSchema) => state.articlesPage?._inited || false;
