import { FC, memo } from 'react';
import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../..';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
   className?: string;
   comment?: Comment
   loading: boolean
}


export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment, loading } = props;

    if(loading) return  <div className={classNames(cls.commentCard, {}, [cls.loading])}>
        <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%"/>
            <Skeleton height={24} width={100}/>
        </div>
        <Skeleton height={32} width='100%'/>
    </div>;

    if(!comment) return null;

    const {text, user} = comment;

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={RoutePath.profile + user.id} className={cls.header}>
                {user.avatar && <Avatar src={user.avatar}/>}
                <Text title={user.username}/>
            </AppLink>
            <Text text={text}/>
        </div>
    );
});
