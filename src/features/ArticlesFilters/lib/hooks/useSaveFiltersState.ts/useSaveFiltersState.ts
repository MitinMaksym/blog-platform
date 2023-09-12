import { useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticlesFilters, ArticlesSortField, ArticleType } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortOrder } from '@/shared/types/sort';
import { ARTICLES_FILTERS } from '@/shared/const/localstorage';
import { selectArticlesFilters} from '../../../model/selectors/articleFiltersSelectors';
import { articlesFiltersActions } from '../../../model/slice/articlesFiltersSlice';

export const useSaveFilterState = (callback: (filters: ArticlesFilters) => void) => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const currentFilters = useSelector(selectArticlesFilters);
    const {
        sort: currentSort, 
        order: currentOrder, 
        search: currentSearch, 
        type: currentType
    } = currentFilters;


    const saveFilters = useCallback((filters: ArticlesFilters) => {
        const {order, sort, search, type} = filters;
        const valuesChanged = (
            order !== currentOrder || 
            sort !== currentSort || 
            currentSearch !== search || 
            currentType !== type
        );
    
        if(order) dispatch(articlesFiltersActions.setOrder(order as SortOrder));
        if(sort) dispatch(articlesFiltersActions.setSort(sort as ArticlesSortField));
        if(type) dispatch(articlesFiltersActions.setType(type as ArticleType));

        dispatch(articlesFiltersActions.setSearch(search));

        if(valuesChanged) callback(filters); 
        
    }, [
        dispatch, 
        callback, 
        currentOrder, 
        currentSearch, 
        currentSort, 
        currentType
    ]);
    
    useEffect(() => {
        const storageValue = localStorage.getItem(ARTICLES_FILTERS);
        const filtersFromStorage = storageValue ? JSON.parse(storageValue as string ) : null;

        const filterFromParams = Array.from(searchParams.entries()).length > 0 
            ? Object.fromEntries(searchParams.entries()) : null;

        if(filterFromParams){
            saveFilters(filterFromParams as unknown as ArticlesFilters);
            localStorage.setItem(ARTICLES_FILTERS, JSON.stringify(
                filterFromParams
            ));
        }

        else if(filtersFromStorage){
            saveFilters(filtersFromStorage);
            setSearchParams(filtersFromStorage);
        }

        else if(currentFilters) {
            setSearchParams({...currentFilters});
            callback(currentFilters);
        }
    }, [
        currentFilters,
        callback, 
        dispatch,
        searchParams,
        saveFilters,
        setSearchParams 
    ]);

};