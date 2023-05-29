import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum BtnVariant {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum BtnSize{
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXL'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: BtnVariant,
  square?: boolean,
  size?: BtnSize
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    variant,
    size = BtnSize.M,
    square,
    ...otherProps
}) => {
    const mods = { 
        [cls.square]:square, 
        [cls.disabled]: otherProps.disabled };
    return <button
        className={classNames(cls.button, 
            mods, [className, cls[variant], cls[size]])}
        {...otherProps}
    >
        {children}
    </button>;
};
