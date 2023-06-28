import { StateSchema } from 'app/providers/StoreProvider';
import { initialState } from '../slice/articlesFiltersSlice';

export const selectArticlesFiltersSearch = (state: StateSchema) => 
    state.articlesFilters?.filters.search || initialState.filters.search;

export const selectArticlesFiltersOrder = (state: StateSchema) => 
    state.articlesFilters?.filters.order || initialState.filters.order;

export const selectArticlesFiltersSortField = (state: StateSchema) => 
    state.articlesFilters?.filters.sort || initialState.filters.sort;

export const selectArticlesFiltersTypeField = (state: StateSchema) => 
    state.articlesFilters?.filters.type || initialState.filters.type;

export const selectArticlesFilters = (state: StateSchema) => 
    state.articlesFilters?.filters || initialState.filters;


