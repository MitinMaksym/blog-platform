import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { ListBox, ListBoxItem } from '@/shared/ui/popups/ListBox/ListBox';
import { PopupDirection } from '@/shared/ui/popups/styles/popup';


interface ArticlesOrderSelectProps {
  value: SortOrder;
  className?: string;
  direction?: PopupDirection;
  onChange: (order: SortOrder) => void;
}

const orderTranslations: Record<SortOrder, string> = {
    'asc': 'ascending-order',
    'desc': 'descending-order'
};

export const ArticlesOrderSelect: FC<ArticlesOrderSelectProps> = memo((props) => {
    const { value, className, direction = 'bottomCenter', onChange } = props;
    const { t } = useTranslation('articles');

    const orderOptions:ListBoxItem<SortOrder>[] = useMemo(() => 
        Object.entries(orderTranslations)
            .map((val) => ({value: val[0] as SortOrder, content:t(val[1])})),[t]);

    return (
        <div className={classNames('', {}, [className])}>
            <ListBox 
                id="article-order-select" 
                items={orderOptions} 
                value={value}
                label={t('in-order')} 
                direction={direction}
                onChange={onChange}/>
        </div>
    );
});