import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    open: boolean
    className?: string
    onClose:() => void
}

export const LoginModal: FC<LoginModalProps> = ({open, onClose}) => (
    <Modal open={open} lazy onClose={onClose}>
        <LoginForm onSuccess={onClose}/>
    </Modal>
);