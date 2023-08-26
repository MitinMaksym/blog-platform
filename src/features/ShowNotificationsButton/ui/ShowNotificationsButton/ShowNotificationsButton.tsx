import { NotificationsList } from 'entities/Notification';
import { FC, memo } from 'react';
import { Icon } from 'shared/ui/Icon/Icon/Icon';
import { Popover } from 'shared/ui/popups/Popover/Popover';
import notificationsIcon from 'shared/assets/icons/notification.svg';
import { PopupDirection } from 'shared/ui/popups/styles/popup';

interface ShowNotificationsButtonProps {
   className?: string;
   direction?: PopupDirection
}

export const ShowNotificationsButton: FC<ShowNotificationsButtonProps> = memo((props) => {
    const { className, direction } = props;
    const trigger = <Icon SVG={notificationsIcon} inverted={true}/>;

    return (
        <Popover trigger={trigger} className={className} direction={direction}>
            <NotificationsList/>
        </Popover>
    );
});