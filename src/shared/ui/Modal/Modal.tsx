import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    className?: string;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { children, className, open, onClose } = props;
    const { closing, close } = useModal({ open, onClose });

    const mods = {
        [cls.open]: open,
        [cls.closing]: closing,
    };

    if (!open) return null;

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
