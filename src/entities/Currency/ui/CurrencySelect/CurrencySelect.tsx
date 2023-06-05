import { FC } from 'react';
import { Select, SelectOption, SelectProps } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

const options: Array<SelectOption> = Object.entries(Currency).map((val) => ({value: val[0], content: val[1]}));

export const CurrencySelect: FC<SelectProps> = (props) => (
    <Select options={options} label="Currency" {...props}/>
);