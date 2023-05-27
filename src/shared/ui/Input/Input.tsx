import { DetailedHTMLProps,InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, 
HTMLInputElement>,"onChange">

interface InputProps extends HTMLInputProps {
    id: string
    value: string
    label?:string
    className?: string;
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        id, 
        value, 
        className, 
        label, 
        onChange, 
        ...otherProps} = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return  <div className={cls.inputWrapper}>
        {    label && <label htmlFor={id} className={cls.label}>{label}</label>}
        <input
            id={id}
            value={value} 
            className={classNames(cls.input, {}, [className])} 
            onChange={handleChange}
            {...otherProps}/></div>;
});