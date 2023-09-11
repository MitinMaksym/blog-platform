import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import eyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Article, ArticleTextBlock as ArticleTextBlockType, ArticleView } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { routes } from '@/shared/const/router';

import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

import cls from './ArticleListItem.module.scss';



interface ArticleListItemProps {
   article: Article
   view: ArticleView
   className?: string
   target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props) => {
    const { className, article, target, view = 'GRID' } = props;
    const {id, title, blocks, createdAt, views, type, img, user} = article;
    const { t } = useTranslation('article-details');


    if(view === 'LIST'){
        const texBlock = blocks.find(block => block.type === 'TEXT') as ArticleTextBlockType;
        return (
            <Card className={classNames(cls.articleListItem, {}, [className, cls.listView ])}>
                <HStack justify='between' align='center'>
                    <HStack gap='16'>
                        <Avatar src={user.avatar}/> 
                        <Text title={user.username}/>
                    </HStack>
                    <Text className={cls.date} text={createdAt}/>
                </HStack>
                <Text className={cls.title} title={title}/>
                <div className={cls.tags}>{type.join(', ')}</div>
                <div className={cls.imageWrapper}>
                    <AppImage className={cls.image} fallback={<Skeleton className={cls.image}/>} src={img} alt={title}/>
                </div>
                {texBlock && <ArticleTextBlock className={cls.textBlock} block={texBlock}/>}
                <AppLink to={routes.articleDetails(id)} theme={AppLinkTheme.OUTLINED}>{t('read-more')}</AppLink>
            </Card>
        );
    } 

    return (
        <AppLink to={routes.articleDetails(id)} target = {target}>
            <Card className={classNames(cls.articleListItem, {}, [className, cls.gridView])}>
                <div className={cls.imageWrapper}>
                    <AppImage className={cls.image} fallback={<Skeleton className={cls.image}/>} src={img} alt={title}/>
                </div>
                <div className={cls.date}>{createdAt}</div>
                <HStack justify='between'>
                    <div className={cls.tags}>{type.join(', ')}</div>
                    <HStack gap='4'>
                        <span className={cls.count}>{views}</span>
                        <Icon SVG={eyeIcon}/>
                    </HStack> 
                </HStack>
                <Text className={cls.title} title={title}/>
            </Card>
        </AppLink>
    );
});