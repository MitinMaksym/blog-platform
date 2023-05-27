import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [loginModalVisible, setLoginModalVisible] = useState(false);

    const closeSignInModal = useCallback(() => setLoginModalVisible(false),[]);
    const openSignInModal = useCallback(() => setLoginModalVisible(true),[]);
    
    const {t} = useTranslation();
    return  <nav className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <Button onClick={openSignInModal}>{t('sign-in')}</Button>
            <LoginModal open={loginModalVisible} onClose={closeSignInModal}/>
        </div>
    </nav>;
};
