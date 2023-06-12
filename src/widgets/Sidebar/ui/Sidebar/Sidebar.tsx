import { selectUserAuthData } from 'entities/User';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { BtnSize, BtnVariant, Button } from 'shared/ui/Button/Button';
import { sidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const isAuth = useSelector(selectUserAuthData);

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
                {sidebarItemsList.filter(({authOnly})=> !authOnly || isAuth)
                    .map((item) => 
                        <SidebarItem key = {item.path} item={item} collapsed={collapsed}/>)}
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
});
