import { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BtnSize, BtnVariant, Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { selectSidebarItems } from '../../model/selectors/selectSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(selectSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <nav data-testid='sidebar' className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <ul className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </ul>

            <Button
                data-testid='toggle-btn'
                className={cls.collapseBtn}
                variant={BtnVariant.BACKGROUND_INVERTED}
                size={BtnSize.L}
                square={true}
                onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>
            <HStack className={cls.switchers} gap='16' justify='center'>
                <ThemeSwitcher />
                <LanguageSwitcher short={collapsed} />
            </HStack>
        </nav>
    );
});
