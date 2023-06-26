import { StateSchema } from 'app/providers/StoreProvider';

export const selectPageScroll = (state: StateSchema) => state.page.scroll;
