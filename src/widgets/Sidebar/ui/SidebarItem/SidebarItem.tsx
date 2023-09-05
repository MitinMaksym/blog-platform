import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/sidebar';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}


export const SidebarItem: FC<SidebarItemProps> = memo((props) => {
    const {t} = useTranslation();
    const {item, collapsed } = props;
    const {text, path} = item;
    return  <li className={classNames(cls.item, {[cls.collapsed]: collapsed}) }>
        <AppLink to={path} 
            className={cls.link} 
            theme={AppLinkTheme.INVERTED}>
            <item.Icon className={cls.icon}/>
            <span className={cls.text}>{t(text)}</span>
        </AppLink>
    </li>;
});