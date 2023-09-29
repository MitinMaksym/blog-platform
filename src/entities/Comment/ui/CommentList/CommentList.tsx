import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import cls from './CommentList.module.scss';

interface CommentListProps {
   className?: string;
   comments: Array<Comment>
   loading: boolean
}

export const CommentList: FC<CommentListProps> = memo((props) => {
    const { className, comments, loading } = props;
    const { t } = useTranslation('article-details');

    if(loading){
        return (
            <>
                <CommentCard loading/>
                <CommentCard loading/>
                <CommentCard loading/>
            </>
        );
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])} data-testid="CommentsList">
            {comments.length > 0 ? 
                comments.map(
                    comment => <CommentCard
                        key={comment.id} 
                        className={cls.comment} 
                        comment={comment}
                        loading={loading} />) : 
                <Text title={t('no-comments-found')}/>}
        </div>
    );
});