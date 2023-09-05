import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox, ListBoxItem, ListBoxProps } from '@/shared/ui/popups';

import { Currency } from '../../model/consts/consts';

const options: Array<ListBoxItem<Currency>> = Object.entries(Currency).map((val) => 
    ({value: val[0] as Currency, content: val[1]}));

export const CurrencySelect: FC<Omit<ListBoxProps<Currency>, 'items' | 'label'>> = memo((props) => {
    const {t} = useTranslation();
 
    return <ListBox items={options}  label={t('currency-label')} {...props}/>;
});