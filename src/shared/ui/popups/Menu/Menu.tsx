import { FC, Fragment, memo, ReactNode } from 'react';
import { Menu as MenuBase } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '../../AppLink/AppLink';
import { BtnVariant, Button } from '../../Button/Button';
import { directionClasses, PopupDirection } from '../styles/popup';

import cls from './Menu.module.scss';
import popupCls from '../styles/Popup.module.scss';

interface MenuItem {
    content: ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
}

interface MenuProps {
    trigger: ReactNode;
    items: Array<MenuItem>;
    direction?: PopupDirection;
    className?: string;
    inactive?: boolean;
}

export const Menu: FC<MenuProps> = memo((props) => {
    const { trigger, items, className, direction = 'bottomLeft', inactive = false } = props;

    return (
        <MenuBase as={'nav'} className={classNames(popupCls.popup, {}, [className])}>
            <MenuBase.Button as='div' className={popupCls.trigger}>
                {trigger}
            </MenuBase.Button>
            <MenuBase.Items as='ul' className={classNames(cls.items, {}, [directionClasses[direction]])}>
                {items.map((item, idx) => (
                    <MenuBase.Item key={idx} as={Fragment} disabled={item.disabled || inactive}>
                        {({ active, disabled }) => {
                            let content = (
                                <Button type='button' variant={BtnVariant.CLEAR}>
                                    {item.content}
                                </Button>
                            );

                            if (item.href) {
                                content = (
                                    <AppLink disabled={disabled || inactive} to={item.href}>
                                        {item.content}
                                    </AppLink>
                                );
                            }

                            return (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [popupCls.disabled]: disabled,
                                        },
                                        [],
                                    )}
                                    onClick={item.onClick}>
                                    {content}
                                </li>
                            );
                        }}
                    </MenuBase.Item>
                ))}
            </MenuBase.Items>
        </MenuBase>
    );
});
