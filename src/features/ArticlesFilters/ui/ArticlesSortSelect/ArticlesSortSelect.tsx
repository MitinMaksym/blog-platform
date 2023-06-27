import { ArticlesSortField } from 'entities/Article';
import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';


import cls from './ArticlesSortSelect.module.scss';

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

    const orderOptions:SelectOption<ArticlesSortField>[] = useMemo(() => 
        Object.entries(sortTranslations)
            .map((val) => ({value: val[0] as ArticlesSortField, content: t(val[1])})),[t]);

    return (
        <div className={classNames(cls.articlesSortSelect, {}, [className])}>
            <Select<ArticlesSortField> 
                id="article-sort-select" 
                options={orderOptions} 
                value={value}
                label={t('sort-by')}
                onChange={onChange}/>
        </div>
    );
});