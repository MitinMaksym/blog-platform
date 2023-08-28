import { StateSchema } from '@/app/providers/StoreProvider';

export const selectPageScrollByPath = (path: string) => (state: StateSchema) => state.page.scroll[path];