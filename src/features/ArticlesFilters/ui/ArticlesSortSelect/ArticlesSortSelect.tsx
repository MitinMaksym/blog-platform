import { ArticlesSortField } from 'entities/Article';
import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';

interface ArticlesSortSelectProps {
   className?: string
   value: ArticlesSortField
   onChange: (order: ArticlesSortField) => void
}

const sortTranslations: Record<ArticlesSortField, string> = {
    'createdAt': 'creation-date',
    'title': 'title',
    'views': 'views'
};

export const ArticlesSortSelect: FC<ArticlesSortSelectProps> = memo((props) => {
    const { value, className, onChange } = props;
    const { t } = useTranslation('articles');

    const orderOptions:ListBoxItem<ArticlesSortField>[] = useMemo(() => 
        Object.entries(sortTranslations)
            .map((val) => ({value: val[0] as ArticlesSortField, content: t(val[1])})),[t]);

    return (
        <div className={classNames('', {}, [className])}>
            <ListBox
                id="article-sort-select" 
                items={orderOptions} 
                value={value}
                label={t('sort-by')}
                onChange={onChange}/>
        </div>
    );
});