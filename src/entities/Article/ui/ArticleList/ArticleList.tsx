import { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useFirstRender } from '@/shared/lib/hooks/useFirstRender/useFirstRender';
import { Text } from '@/shared/ui/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Array<Article>;
    view: ArticleView;
    loading?: boolean;
    className?: string;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === 'GRID' ? 8 : 3).fill(0).map((_, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList: FC<ArticleListProps> = memo((props) => {
    const { t } = useTranslation('articles');
    const { className, articles, view, target, loading = false } = props;
    const firstRender = useFirstRender();
    const notFoundMsgVisible = !articles.length && !loading && !firstRender;

    const renderArticle = useCallback(
        (article: Article) => <ArticleListItem key={article.id} view={view} article={article} target={target} />,
        [view, target],
    );

    return (
        <div
            className={classNames(cls.articleList, {}, [className, `${cls[`${view.toLowerCase()}View`]}`])}
            data-testid='ArticleList'>
            {articles.length > 0 && articles.map(renderArticle)}
            {notFoundMsgVisible && <Text title={t('articles-not-found')} align='center' />}
            {loading && getSkeletons(view)}
        </div>
    );
});
