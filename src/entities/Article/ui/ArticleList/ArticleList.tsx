import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
   articles: Array<Article>
   view: ArticleView
   loading?:boolean 
   className?: string;

}


const getSkeletons = (view: ArticleView) => new Array(view === 'GRID' ? 8 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ));

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { className, articles, view, loading = false } = props;

    const renderArticle = useCallback((article) => 
        <ArticleListItem view={view} key={article.id} article={article}/>, [view]);

    let content;

    if(loading){
        content = getSkeletons(view);
    } else {
        content = articles.map(renderArticle);
    }


    return (
        <div className={classNames(cls.articleList, {}, [className, `${cls[`${view.toLowerCase()}View`]}`])}>
            {content}
        </div>
    );
});