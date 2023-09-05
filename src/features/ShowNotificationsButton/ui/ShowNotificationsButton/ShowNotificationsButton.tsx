import { FC, memo, useCallback, useState } from 'react';
import { NotificationsList } from '@/entities/Notification';
import { Icon } from '@/shared/ui/Icon';
import notificationsIcon from '@/shared/assets/icons/notification.svg';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './ShowNotificationsButton.module.scss';
import { PopupDirection } from '@/shared/ui/popups/styles/popup';
import { Popover } from '@/shared/ui/popups';

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
       
            <Drawer isOpen={drawerVisible} onClose={hideDrawer}>
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