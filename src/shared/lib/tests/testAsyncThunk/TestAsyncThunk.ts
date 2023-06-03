import {  AsyncThunk } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type AsyncThunkType<Return, Arg, Reject> = 
AsyncThunk<Return, Arg, ThunkConfig<Reject>>

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, Reject> {
    dispatch: jest.MockedFn<any>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    getState: () => StateSchema;

    asyncThunk: AsyncThunkType<Return, Arg, Reject>;

    constructor(asyncThunk:AsyncThunkType<Return, Arg, Reject>){
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.api = mockedAxios;
        this.asyncThunk = asyncThunk;
    }

    async callThunk(arg: Arg){
        const action = this.asyncThunk(arg);
        const result = await action(this.dispatch, this.getState, {api: this.api});

        return result;
    }
}