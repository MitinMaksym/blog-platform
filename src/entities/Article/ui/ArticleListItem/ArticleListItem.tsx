import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import eyeIcon from 'shared/assets/icons/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon/Icon';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Article, ArticleTextBlock as ArticleTextBlockType, ArticleView } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

import cls from './ArticleListItem.module.scss';


interface ArticleListItemProps {
   article: Article
   view: ArticleView
   className?: string

   
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { className, article, view = 'GRID' } = props;
    const {id, title, blocks, createdAt, views, type, img, user} = article;
    const { t } = useTranslation('article-details');

    const articlePath = RoutePath.article_details + id;

    if(view === 'LIST'){
        const texBlock = blocks.find(block => block.type === 'TEXT') as ArticleTextBlockType;
        return (
            <Card className={classNames(cls.articleListItem, {}, [className, cls.listView ])}>
                <div className={cls.header}>
                    <div className={cls.userInfo}>
                        <Avatar src={user.avatar}/> 
                        <Text title={user.username}/>
                    </div>
                    <Text className={cls.date} text={createdAt}/>
                </div>
                <Text className={cls.title} title={title}/>
                <div className={cls.tags}>{type.join(', ')}</div>
                <div className={cls.imageWrapper}>
                    <img className={cls.image} src={img} alt={title}/>
                </div>
                {texBlock && <ArticleTextBlock className={cls.textBlock} block={texBlock}/>}
                <AppLink to={articlePath} theme={AppLinkTheme.OUTLINED}>{t('read-more')}</AppLink>
            </Card>
        );
    } 

    return (
        <AppLink to={articlePath}>
            <Card className={classNames(cls.articleListItem, {}, [className, cls.gridView])}>
                <div className={cls.imageWrapper}>
                    <img className={cls.image} src={img} alt={title}/>
                </div>
                <div className={cls.date}>{createdAt}</div>
                <div className={cls.info}>
                    <div className={cls.tags}>{type.join(', ')}</div>
                    <div className={cls.views}>
                        <div className={cls.count}>{views}</div>
                        <Icon SVG={eyeIcon}/>
                    </div> 
                </div>
                <Text className={cls.title} title={title}/>
            </Card>
        </AppLink>
    );
});