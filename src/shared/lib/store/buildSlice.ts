import { useDispatch } from 'react-redux';
import { SliceCaseReducers, CreateSliceOptions, createSlice, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

export function buildSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(
    options: CreateSliceOptions<State, CaseReducers, Name>,
) {
    const slice = createSlice(options);
    const useActions = (): typeof slice.actions => {
        const dispatch = useDispatch();
        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return { ...slice, useActions };
}
