import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticlesFilters as  ArticlesFiltersType} from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { useSaveFilterState } from '../../lib/hooks/useSaveFiltersState.ts/useSaveFiltersState';
import { 
    selectArticlesFiltersSearch, 
    selectArticlesFiltersOrder,
    selectArticlesFiltersSortField,
    selectArticlesFiltersTypeField } from '../../model/selectors/articleFiltersSelectors';
import { articlesFiltersReducer } from '../../model/slice/articlesFiltersSlice';
import { ArticlesOrderSelect } from '../ArticlesOrderSelect/ArticlesOrderSelect';
import { ArticlesSortSelect } from '../ArticlesSortSelect/ArticlesSortSelect';
import { ArticlesTags } from '../ArticlesTags/ArticlesTags';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps {
   className?: string
   onFilterChange: (filters: ArticlesFiltersType) => void
}

const reducers: ReducersList = {
    articlesFilters: articlesFiltersReducer
};

export const ArticlesFilters: FC<ArticlesFiltersProps> = memo((props) => {
    const [_, setSearchParams] = useSearchParams();
    const {t} = useTranslation();
    const { className, onFilterChange } = props;
    const search = useSelector(selectArticlesFiltersSearch);
    const order = useSelector(selectArticlesFiltersOrder);
    const sortField = useSelector(selectArticlesFiltersSortField);
    const type = useSelector(selectArticlesFiltersTypeField);

    const debouncedFilterChange = useDebounce(onFilterChange, 300);

    const handleFiltersChange = useCallback(<T extends string>(filter: keyof ArticlesFiltersType) => 
        (value: T) => {
            setSearchParams({type, sort: sortField, search, order,[filter]: value});
        }, [setSearchParams, sortField, search, order, type]);
    

    useSaveFilterState(debouncedFilterChange);

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.articlesFilters, {}, [className])}>
                <HStack className={cls.selects} gap='24'>
                    <ArticlesOrderSelect value={order} onChange={handleFiltersChange('order')}/>
                    <ArticlesSortSelect value={sortField} onChange={handleFiltersChange('sort')}/>
                </HStack>
                <Card className={cls.searchInput}>
                    <Input 
                        id='search-input' 
                        value={search} 
                        placeholder={t('search')}
                        onChange={handleFiltersChange('search')}/>
                </Card>
                <ArticlesTags value={type} onChange={handleFiltersChange('type')}/>
            </div>
        </DynamicReducerLoader>
    );
});
