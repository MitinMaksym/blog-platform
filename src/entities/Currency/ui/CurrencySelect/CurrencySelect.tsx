import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption, SelectProps } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

const options: Array<SelectOption<Currency>> = Object.entries(Currency).map((val) => 
    ({value: val[0] as Currency, content: val[1]}));

export const CurrencySelect: FC<SelectProps<Currency>> = memo((props) => {
    const {t} = useTranslation();

    return <Select options={options} label={t('currency-label')} {...props}/>;
});