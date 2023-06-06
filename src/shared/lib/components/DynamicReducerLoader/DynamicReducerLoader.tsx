import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, StoreWithReducerManager } from 'app/providers/StoreProvider';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

interface DynamicReducerLoaderProps {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({type:`@INIT ${name} reducer`});
        });



        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type:`@DESTROY ${name} reducer`});
                });
            }       
        };
        // eslint-disable-next-line
    }, []);
    return <>{children}</>;
};