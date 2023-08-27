import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

export const Drawer = (props: DrawerProps) => {
    const {
        className,
        children,
        open,
        onClose,
    } = props;

    const {close, closing} = useModal({open, onClose});

    const mods: Mods = {
        [cls.opened]: open,
        [cls.closing]: closing,
    };

    if(!open) return null;

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};


