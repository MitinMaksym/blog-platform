import { FC, ReactNode } from 'react';
import { Popover as HPopover} from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { directionClasses, PopupDirection } from '../styles/popup';

import cls from './Popover.module.scss';
import popupCls from '../styles/Popup.module.scss';



interface PopoverProps {
    className?: string;
    children: ReactNode
    trigger: ReactNode
    direction?: PopupDirection
    disabled?: boolean
}

export const Popover: FC<PopoverProps> = ({
    className,
    trigger,
    children,
    direction = 'bottomLeft',
    disabled = false,
}) => (
    <HPopover className={classNames(popupCls.popup, {}, [className])}>
        <HPopover.Button
            as="div"
            disabled={disabled}
            className={classNames(
                popupCls.trigger,
                { [popupCls.disabled]: disabled },
                []
            )}
        >
            {trigger}
        </HPopover.Button>
        <HPopover.Panel
            className={classNames(cls.content, {}, [directionClasses[direction]])}
        >
            {children}
        </HPopover.Panel>
    </HPopover>
);