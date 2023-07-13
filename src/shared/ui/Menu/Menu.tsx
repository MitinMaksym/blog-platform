import { FC, Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu as MenuBase } from '@headlessui/react';
import { AppLink } from '../AppLink/AppLink';
import { BtnVariant, Button } from '../Button/Button';

import cls from './Menu.module.scss';

type DropdownDirection = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

interface MenuItem {
   content: ReactNode
   disabled?: boolean
   href?: string
   onClick?: () => void
}

interface MenuProps {
   trigger: ReactNode
   items: Array<MenuItem>
   direction?: DropdownDirection
   className?: string;
}

const directionClasses: Record<DropdownDirection, string> = {
    'bottomLeft': cls.directionBottomLeft,
    'bottomRight': cls.directionBottomRight,
    'topLeft': cls.directionTopLeft,
    'topRight': cls.directionTopRight
};

export const Menu: FC<MenuProps> = memo((props) => {
    const { trigger, items, className, direction = 'bottomLeft' } = props;




    return (
        <MenuBase as={'div'} className={classNames(cls.menu, {}, [className])}>
            <MenuBase.Button as={'div'} className={cls.trigger}>{trigger}</MenuBase.Button>
            <MenuBase.Items as="ul" className={classNames(cls.items, {}, [directionClasses[direction]])}>
                {items.map((item, idx) => <MenuBase.Item 
                    key={idx}
                    as={Fragment}
                    disabled={item.disabled}>
                    {({ active, disabled }) => {
                        let content =  <Button type='button' variant={BtnVariant.CLEAR}>{item.content}</Button>;


                        if(item.href) {
                            content = <AppLink to={item.href}>{item.content}</AppLink>;
                        }

                        return  <li className={classNames(cls.item, 
                            {
                                [cls.active]: active, 
                                [cls.disabled]: disabled
                            }, [])
                        } onClick={item.onClick}>
                            {content}
                        </li>;
                    }}
                </MenuBase.Item>)}
            </MenuBase.Items>
        </MenuBase>

    );
});
