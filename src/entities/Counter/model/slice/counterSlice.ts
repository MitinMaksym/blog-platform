import { buildSlice } from '@/shared/lib/store';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { useActions: useCounterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
export const { actions: counterActions } = counterSlice;
