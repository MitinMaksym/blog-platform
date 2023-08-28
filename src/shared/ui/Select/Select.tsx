import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T
    content: string
}

export interface SelectProps<T extends string> {
    id: string
    value?: string
    className?: string
    label?: string
    options?: SelectOption<T>[]
    disabled?: boolean
    onChange:  (value: T) => void
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { id, value, className, label, options, disabled, onChange } = props;

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as T);};

    const optionsList = useMemo(() => options?.map((opt) => 
        <option 
            key={opt.value} className={cls.option} value={opt.value}>
            {opt.content}
        </option>),[options]);
    
    return <div className={classNames(cls.wrapper, {}, [className])}>
        { label && <label htmlFor={id} className={cls.label}>{label}</label>}
        <select 
            id={id} 
            value={value} 
            className={cls.select} 
            disabled={disabled} 
            onChange={changeHandler}>
            {optionsList}
        </select>
    </div>;
};