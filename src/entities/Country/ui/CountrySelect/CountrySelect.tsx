import { FC } from 'react';
import { Select, SelectOption, SelectProps } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

const options: Array<SelectOption> = Object.entries(Country).map((val) => ({value: val[0], content: val[1]}));

export const CountrySelect: FC<SelectProps> = (props) => (
    <Select options={options} label="Country" {...props}/>
);