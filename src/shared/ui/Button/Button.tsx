import { ButtonHTMLAttributes, FC, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum BtnVariant {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    OUTLINE_ERROR = 'outlineError',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum BtnSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: BtnVariant;
    square?: boolean;
    size?: BtnSize;
}

export const Button: FC<ButtonProps> = memo(
    ({ className, children, variant = BtnVariant.OUTLINE, size = BtnSize.M, square, ...otherProps }) => {
        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: otherProps.disabled,
        };
        return (
            <button className={classNames(cls.button, mods, [className, cls[variant], cls[size]])} {...otherProps}>
                {children}
            </button>
        );
    },
);
