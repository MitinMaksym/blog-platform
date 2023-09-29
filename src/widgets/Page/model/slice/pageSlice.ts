import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageSchema } from '../types/pageSchema';

const initialState: PageSchema = {
    scroll: {},
};

export const pageSlice = createSlice({
    name: 'pageSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload: { path, position } }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[path] = position;
        },
    },
});

export const { actions: pageActions } = pageSlice;
export const { reducer: pageReducer } = pageSlice;
