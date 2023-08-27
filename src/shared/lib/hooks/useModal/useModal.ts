import { useState, useEffect, useRef, useCallback } from 'react';

interface ModalProps {
    open: boolean
    animationDuration?: number
    onClose: () => void
} 
export const useModal = ({
    open,
    animationDuration = 300,
    onClose,
}: ModalProps) => {
    const [closing, setClosing] = useState(false);
    const timerRef = useRef<number>();

    const close = useCallback(() => {
        setClosing(true);

        timerRef.current = window.setTimeout(() => {
            setClosing(false);
            onClose();
        }, animationDuration);
    }, [onClose, animationDuration]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        },
        [close]
    );

    useEffect(() => {
        if (open) document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            window.clearTimeout(timerRef.current);
        };
    }, [open, handleKeyDown]);

    return { closing, close };
};