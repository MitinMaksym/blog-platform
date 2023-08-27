import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useGetNotificationsQuery } from '../../api/notificationsApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { NotificationSkeleton } from '../NotificationSkeleton/NotificationSkeleton';
import cls from './NotificationsList.module.scss';

interface NotificationsListProps {
   className?: string;
}

export const NotificationsList: FC<NotificationsListProps> = memo((props) => {
    const { className } = props;
    const {t} = useTranslation();
    const { data, error, isLoading } = useGetNotificationsQuery(undefined, {
        pollingInterval: 10000,
        refetchOnMountOrArgChange: true,
    });
    let content;

    if(isLoading){
        content = <NotificationSkeleton className={cls.item} />;
    }

    else if (error && 'data' in error){
        content = (
            <Text
                title={t('error-occured')}
                theme={TextTheme.ERROR}
                text={t('notifications-error')}
            />
        );
    } else if(data) {
        content = <VStack gap='4' align='stretch'>
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    className={cls.item}
                    item={notification}
                />
            ))}
        </VStack>;
    }

    return (
        <div className={classNames(cls.notificationsList, {}, [className])}>
            {content}
        </div>
    );
});