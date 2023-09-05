import { FC, memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';

interface NotificationSkeletonProps {
   className?: string;
}

export const NotificationSkeleton: FC<NotificationSkeletonProps> = memo((props) => {
    const { className } = props;

    return <>
        <Skeleton className={className} />
        <Skeleton className={className} />
        <Skeleton className={className} />
        <Skeleton className={className} />
    </>;
});