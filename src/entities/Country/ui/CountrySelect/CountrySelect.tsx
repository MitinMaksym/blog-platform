import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox, ListBoxItem, ListBoxProps } from '@/shared/ui/popups';

import { Country } from '../../model/consts/consts';

export const CountrySelect: FC<Omit<ListBoxProps<Country>, 'items' | 'label'>> = memo((props) => {
    const { t } = useTranslation();
    const translations: Record<Country, string> = useMemo(
        () => ({
            [Country.UKRAINE]: t('ukraine'),
            [Country.USA]: t('usa'),
        }),
        [t],
    );

    const options: Array<ListBoxItem<Country>> = useMemo(
        () => Object.entries(translations).map((val) => ({ value: val[0] as Country, content: val[1] })),
        [translations],
    );

    return <ListBox items={options} label={t('country-label')} {...props} />;
});
