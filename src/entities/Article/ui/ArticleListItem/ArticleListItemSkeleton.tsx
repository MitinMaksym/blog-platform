
import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
   view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props) => {
    const {  view = 'GRID' } = props;

    if(view === 'LIST'){
        return (
            <Card className={classNames(cls.articleListItem, {}, [cls.listView])}>
                <div className={cls.header}>
                    <div className={cls.userInfo}>
                        <Skeleton width={30} height={30} border='50%'/>
                        <Skeleton width={70} height={16}/>
                    </div>
                </div>
                <Skeleton className={cls.title} width={150} height={24}/>
                <div className={cls.tags}><Skeleton width={50} height={16}/></div>
                <Skeleton width='100%' height={120}/>
            </Card>
        );
    } 
    
    return (
        <Card className={classNames(cls.articleListItem, {}, [cls.gridView])}>
            <div className={cls.imageWrapper}>
                <Skeleton className={cls.image} />
            </div>

            <div className={cls.info}>
                <div className={cls.tags}>   <Skeleton width={70} height={16}/></div>
                <div className={cls.views}>
                    <Skeleton width={70} height={16}/>
                </div> 
            </div>
            <Skeleton width={100} height={24}/>

        </Card>
    );
});