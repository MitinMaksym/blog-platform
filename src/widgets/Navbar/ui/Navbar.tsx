import { selectIsUserAdmin, selectIsUserManager, selectUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routerConfig';
import { ARTICLES_FILTERS, USER_DATA_KEY } from 'shared/const/localstorage';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Menu } from 'shared/ui/Menu/Menu';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const userData = useSelector(selectUserAuthData);
    const isAdmin = useSelector(selectIsUserAdmin);
    const isManager = useSelector(selectIsUserManager);
    const adminPanelAvailable = isAdmin || isManager;

    const closeLoginModal = useCallback(() => setLoginModalVisible(false),[]);

    const openLoginModal = useCallback(() => setLoginModalVisible(true),[]);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
        localStorage.removeItem(USER_DATA_KEY);
        localStorage.removeItem(ARTICLES_FILTERS);
    }, [dispatch]);

    if(userData){
        return (
            <nav className={classNames(cls.navbar, {}, [className])}>
                <Menu
                    trigger={<Avatar src={userData.avatar} size={30} />}
                    direction="bottomLeft"
                    items={[
                        ...[
                            ...( adminPanelAvailable
                                ? [
                                    {
                                        content: t('admin-panel'),
                                        href: RoutePath.admin,
                                    },
                                ]
                                : []),
                        ],
                        {
                            content: t('create-article'),
                            href: RoutePath.article_create,
                        },
                        {
                            content: t('logout'),
                            onClick: handleLogout,
                        },
                    ]}
                />
            </nav>
        );  
    }
    
    return  <nav className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <Button onClick={openLoginModal}>{t('sign-in')}</Button>
            {loginModalVisible && <LoginModal open={loginModalVisible} onClose={closeLoginModal}/>}
        </div>
    </nav>;
};
