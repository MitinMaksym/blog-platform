import { AsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema, ThunkConfig } from '@/app/providers/StoreProvider';

type AsyncThunkType<Return, Arg, Reject> = AsyncThunk<Return, Arg, ThunkConfig<Reject>>;

const mockedAxios = jest.mocked(axios, { shallow: false });

export class TestAsyncThunk<Return, Arg, Reject> {
    // eslint-disable-next-line
    dispatch: jest.MockedFn<any>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    getState: () => StateSchema;

    asyncThunk: AsyncThunkType<Return, Arg, Reject>;

    constructor(asyncThunk: AsyncThunkType<Return, Arg, Reject>, state?: DeepPartial<StateSchema>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.asyncThunk = asyncThunk;
    }

    async callThunk(arg: Arg) {
        const action = this.asyncThunk(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api });

        return result;
    }
}
