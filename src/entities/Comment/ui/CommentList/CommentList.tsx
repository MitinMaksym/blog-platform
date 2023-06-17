import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard, CommentCardSkeleton } from '../CommentCard/CommentCard';

import cls from './CommentList.module.scss';

interface CommentListProps {
   className?: string;
   comments: Array<Comment>
   loading?: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, comments, loading } = props;
    const { t } = useTranslation('article-details');

    if(loading){
        return <CommentCardSkeleton/>;
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments.length > 0 ? 
                comments.map(
                    comment => <CommentCard
                        key={comment.id} 
                        className={cls.comment} 
                        comment={comment} />) : 
                <Text title={t('no-comments-found')}/>}
        </div>
    );
});