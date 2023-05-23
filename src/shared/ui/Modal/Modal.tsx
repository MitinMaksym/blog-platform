import { FC, MouseEvent, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    open: boolean
    className?: string;
    onClose: () => void;

}

export const Modal: FC<ModalProps> = (props) => {
    const { children, className, open, onClose } = props;

    const mods = {
        [cls.open]:open,
    };

    const handleClose = useCallback(() => {
        onClose();
    },[onClose]);

    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyDown = useCallback((e:KeyboardEvent) => {
        if(e.key === 'Escape') handleClose();
    }, [handleClose]);

    useEffect(() => {
        if(open) {
            document.addEventListener('keydown', handleKeyDown);
        }
      
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, handleKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};