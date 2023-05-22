import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { BtnSize, BtnVariant, Button } from 'shared/ui/Button/Button';
import AboutIcon from "shared/assets/icons/about.svg";
import MainIcon from "shared/assets/icons/main.svg";

import { RoutePath } from 'shared/config/routerConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <aside data-testid = 'sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <ul className={cls.items}>
                <li className={cls.item}>
                    <AppLink to={RoutePath.main} 
                        className={cls.link} 
                        theme={AppLinkTheme.SECONDARY}>
                        <MainIcon className={cls.icon}/>
                        <span className={cls.linkText}>{t('main-page-link')}</span>
                    </AppLink>
                </li> 
            
                <li className={cls.item}>
                    <AppLink to={RoutePath.about} 
                        className={cls.link} 
                        theme={AppLinkTheme.SECONDARY}>
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.linkText}>{t('about-page-link')}</span>
                    </AppLink>
                </li>
               
            </ul>
          
            <Button data-testid='toggle-btn' 
                className={cls.collapseBtn} 
                variant={BtnVariant.BACKGROUND_INVERTED} 
                size={BtnSize.L}
                square={true}
                onClick={onToggle}>{collapsed ? '>' : '<'}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed}/>
            </div>
        </aside>
    );
};
