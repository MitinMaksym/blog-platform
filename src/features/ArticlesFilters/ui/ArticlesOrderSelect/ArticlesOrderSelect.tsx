import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';


interface ArticlesOrderSelectProps {
   className?: string
   value: SortOrder
   onChange: (order: SortOrder) => void
}

const orderTranslations: Record<SortOrder, string> = {
    'asc': 'ascending-order',
    'desc': 'descending-order'
};

export const ArticlesOrderSelect: FC<ArticlesOrderSelectProps> = memo((props) => {
    const { value, className, onChange } = props;
    const { t } = useTranslation('articles');

    const orderOptions:SelectOption<SortOrder>[] = useMemo(() => 
        Object.entries(orderTranslations)
            .map((val) => ({value: val[0] as SortOrder, content:t(val[1])})),[t]);

    return (
        <div className={classNames('', {}, [className])}>
            <Select<SortOrder> 
                id="article-order-select" 
                options={orderOptions} 
                value={value}
                label={t('in-order')} 
                onChange={onChange}/>
        </div>
    );
});