import { ChangeEvent, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string
    content: string
}

export interface SelectProps {
    id: string
    value?: string
    className?: string
    label?: string
    options?: SelectOption[]
    disabled?: boolean
    onChange:  (value: string) => void
}

export const Select: FC<SelectProps> = ({ id, value, className, label, options, disabled, onChange }) => {

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

    const optionsList = useMemo(() => options?.map((opt) => 
        <option 
            key={opt.value} className={cls.option}>
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