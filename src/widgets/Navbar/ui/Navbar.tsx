import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { ShowNotificationsButton } from '@/features/ShowNotificationsButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const userData = useSelector(selectUserAuthData);

    const closeLoginModal = useCallback(() => setLoginModalVisible(false),[]);

    const openLoginModal = useCallback(() => setLoginModalVisible(true),[]);

    let content;

    if(userData){
        content =  (<>
            <ShowNotificationsButton/>
            <AvatarDropdown/>
        </>
        );  
    } else {
        content = (
            <>
                <Button onClick={openLoginModal}>{t('sign-in')}</Button>
                <LoginModal open={loginModalVisible} onClose={closeLoginModal} />
            </>
        );
    }
    
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {content}
        </header>
    );
};
