import {  AsyncThunk } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type AsyncThunkType<Return, Arg, Reject> = 
AsyncThunk<Return, Arg, {
    rejectValue: Reject;
}>

export class TestAsyncThunk<Return, Arg, Reject> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    asyncThunk: AsyncThunkType<Return, Arg, Reject>;

    constructor(asyncThunk:AsyncThunkType<Return, Arg, Reject>){
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.asyncThunk = asyncThunk;
    }

    async callThunk(arg: Arg){
        const action = this.asyncThunk(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}