import { selectUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const userData = useSelector(selectUserAuthData);

    const closeLoginModal = useCallback(() => setLoginModalVisible(false),[]);

    const openLoginModal = useCallback(() => setLoginModalVisible(true),[]);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if(userData){
        return <nav className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={handleLogout}>{t('logout')}</Button>
            </div>
        </nav>;
    }
    
    return  <nav className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <Button onClick={openLoginModal}>{t('sign-in')}</Button>
            {loginModalVisible && <LoginModal open={loginModalVisible} onClose={closeLoginModal}/>}
        </div>
    </nav>;
};
