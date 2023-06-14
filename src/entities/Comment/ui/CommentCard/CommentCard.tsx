import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../..';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
   className?: string;
   comment: Comment
}

export const CommentCard: FC<CommentCardProps> = memo((props) => {
    const { className, comment } = props;
    const {text, user} = comment;

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                {user.avatar && <Avatar src={user.avatar}/>}
                <Text title={user.username}/>
            </div>
            <Text text={text}/>
        </div>
    );
});

export const CommentCardSkeleton= memo(() => (
    <div className={classNames(cls.commentCard, {}, [])}>
        <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%"/>
            <Skeleton height={24} width={100}/>
        </div>
        <Skeleton height={32} width='100%'/>
    </div>
));