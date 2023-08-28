import { DetailedHTMLProps,InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, 
HTMLInputElement>,'onChange'>

interface InputProps extends HTMLInputProps {
    id: string
    value: string | undefined | number
    label?: string
    className?: string
    readOnly?: boolean
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        id, 
        value, 
        className, 
        label,
        readOnly = false, 
        onChange, 
        ...otherProps} = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const  mods: Mods = {
        [cls.readOnly]:readOnly
    };
    return  <div className={classNames(cls.inputWrapper, mods, [className]) }>
        {    label && <label htmlFor={id} className={cls.label}>{label}</label>}
        <input
            id={id}
            readOnly={readOnly}
            value={value} 
            className={cls.input} 
            onChange={handleChange}
            {...otherProps}/></div>;
});