import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TagItem, Tags } from '@/shared/ui/Tags';
import { ArticleType } from '@/entities/Article';

interface ArticlesTagsProps {
   className?: string;
   value: ArticleType
   onChange: (value: ArticleType) => void
}
const articleTypesTranslations:Record<ArticleType, string> =  {
    'ALL':'all',
    'ECONOMICS': 'economics',
    'IT': 'it',
    'POLITICS': 'politics',
    'SCIENCE': 'science',
    'SPORT': 'sport',
};
   
 
export const ArticlesTags: FC<ArticlesTagsProps> = memo((props) => {
    const { value, onChange, className } = props;
    const { t } = useTranslation('articles');
    const tags: TagItem<ArticleType>[] = useMemo(() => 
        Object.entries(articleTypesTranslations)
            .map((val) => ({value: val[0] as ArticleType, content: t(val[1])})),[t]);
  
    return <Tags 
        items={tags} 
        value={value} 
        className={classNames('', {}, [className])} 
        onChange={onChange}/>;
});
