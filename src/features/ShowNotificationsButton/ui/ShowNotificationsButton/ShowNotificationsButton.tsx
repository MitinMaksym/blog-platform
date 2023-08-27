import { NotificationsList } from 'entities/Notification';
import { FC, memo, useCallback, useState } from 'react';
import { Icon } from 'shared/ui/Icon/Icon/Icon';
import { Popover } from 'shared/ui/popups/Popover/Popover';
import notificationsIcon from 'shared/assets/icons/notification.svg';
import { PopupDirection } from 'shared/ui/popups/styles/popup';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
import { Drawer } from 'shared/ui/Drawer/Drawer';

import cls from './ShowNotificationsButton.module.scss';

interface ShowNotificationsButtonProps {
   className?: string;
   direction?: PopupDirection
}

export const ShowNotificationsButton: FC<ShowNotificationsButtonProps> = memo((props) => {
    const { className, direction } = props;
    const isMobile = useDevice();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = useCallback(() => {setDrawerVisible(true);}, []);
    const hideDrawer = useCallback(() => {setDrawerVisible(false);}, []);

    const trigger = <Icon SVG={notificationsIcon} inverted onClick={showDrawer}/>;


    if(isMobile){
        return <>
            {trigger}
            <Drawer open={drawerVisible} onClose={hideDrawer}>
                <NotificationsList/>
            </Drawer>
        </>;
     
    }

    return (
        <Popover trigger={trigger} className={className} direction={direction}>
            <NotificationsList className={cls.list}/>
        </Popover>
    );
});