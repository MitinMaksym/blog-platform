import {
    CombinedState,
    configureStore, 
    EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';

import { createReducerManager, ReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

export type ThunkExtraArg = {
    api: AxiosInstance
}

const extraArg: ThunkExtraArg= {
    api: $api,
};

export const createReduxStore = (
    initialState?: StateSchema, 
    asyncReducers?: ReducersMapObject<StateSchema>
) => { 

    const rootReducer:ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store =  configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
      
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),    });
    
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};


export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager:ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export interface ThunkConfig<T>{
    rejectValue: T
    extra: ThunkExtraArg
    dispatch: AppDispatch
    state: StateSchema
}
