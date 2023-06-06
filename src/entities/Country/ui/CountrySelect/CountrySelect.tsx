import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectProps } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';


export const CountrySelect: FC<SelectProps> = memo((props) => {
    const {t} = useTranslation();

    const translations:Record<Country, string>  = useMemo(() => (
        {
            [Country.UKRAINE]: t('ukraine'),
            [Country.USA]: t('usa'),
        }
    ), [t]);

    const options = useMemo(() => 
        Object.entries(translations).map((val) => ({value: val[0], content: val[1]})),[translations]);
    return <Select options={options} label={t('country-label')} {...props}/>;
});