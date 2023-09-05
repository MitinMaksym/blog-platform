import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PopupDirection } from '@/shared/ui/popups/styles/popup';
import { ListBox, ListBoxItem } from '@/shared/ui/popups';

interface ArticlesSortSelectProps {
   value: ArticlesSortField
   className?: string
   direction?: PopupDirection
   onChange: (order: ArticlesSortField) => void
}

const sortTranslations: Record<ArticlesSortField, string> = {
    'createdAt': 'creation-date',
    'title': 'title',
    'views': 'views'
};

export const ArticlesSortSelect: FC<ArticlesSortSelectProps> = memo((props) => {
    const { value, className, direction = 'bottomCenter', onChange } = props;
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
                direction={direction}
                onChange={onChange}/>
        </div>
    );
});