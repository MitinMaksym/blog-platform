import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { Notification } from '../../model/types/notification';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
   item: Notification
   className?: string;
}

export const NotificationItem: FC<NotificationItemProps> = memo((props) => {
    const { item, className } = props;
    const {title, description, href} = item;

    const content =  <Card className={classNames(cls.notificationItem, {}, [])}>
        <Text title={title} text={description} size="sizeS"/>
    </Card>;

    if(href) {
        return (
            <a
                href={href}
                className={classNames(cls.link, {}, [className])}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return <div className={className}>{content}</div>;
});