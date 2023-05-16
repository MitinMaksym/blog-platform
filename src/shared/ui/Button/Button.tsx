import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum BtnVariant {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: BtnVariant
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    variant,
    ...otherProps
}) => (
    <button
        className={classNames(cls.button, {}, [className, cls[variant]])}
        {...otherProps}
    >
        {children}
    </button>
);
