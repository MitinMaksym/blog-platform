import { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

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
   onChange: (el: T) => void
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {id, items, value, disabled, label, onChange} = props;
    const { className } = props;

    return (
        <HStack 
            justify='between' 
            align='center'
            gap="4"
            className={classNames(cls.listBox, {}, [className])} 
        >
            {label && <label htmlFor={id}>{label}</label>}
            <Listbox
                as={'div'} 
                value={value} 
                onChange={onChange}>
                <Listbox.Button className={cls.trigger}>
                    <Button disabled={disabled}>
                        {items.find(el => el.value === value)?.content}
                    </Button></Listbox.Button>
                <Listbox.Options className={cls.options} as='ul'>
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
};