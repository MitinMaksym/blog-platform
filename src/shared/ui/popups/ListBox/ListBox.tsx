import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../Button/Button';
import { HStack } from '../../Stack';
import { directionClasses, PopupDirection } from '../styles/popup';
import { TypedMemo } from '@/shared/lib/components/TypedMemo/TypedMemo';

import popupCls from '../styles/Popup.module.scss';
import cls from './ListBox.module.scss';


export type ListBoxItem<T extends string> = {
   value: T
   content: string
}

export interface ListBoxProps<T extends string> {
   id: string
   items: Array<ListBoxItem<T>>
   value?: T
   label?: string
   disabled?: boolean
   className?: string
   direction?: PopupDirection
   onChange: (el: T) => void
}

export const ListBox = TypedMemo(<T extends string>(props: ListBoxProps<T>) => {
    const {id, items, value, disabled, label,direction = 'bottomLeft', onChange} = props;
    const { className } = props;

    return (
        <HStack 
            justify='between' 
            align='center'
            gap="4"
        >
            {label && <label htmlFor={id}>{label}</label>}
            <Listbox
                as={'div'} 
                value={value} 
                className={classNames(popupCls.popup, {}, [className])} 
                onChange={onChange}>
                <Listbox.Button as='div' className={popupCls.trigger}>
                    <Button disabled={disabled}>
                        {items.find(el => el.value === value)?.content}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(cls.options, {}, [directionClasses[direction]])} as='ul'>
                    {items.map((item) => (
                        <Listbox.Option
                            key={item.value}
                            value={item.value}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={
                                        classNames(cls.item, 
                                            {[cls.active]: active, 
                                                [cls.selected]: selected}, [])}
                                >
                                    {item.content}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    );
});