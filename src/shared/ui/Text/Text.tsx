import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme  {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
}

export const Text: FC<TextProps> = memo(({ className, title, text, theme }) => (
    <div className={classNames(cls.text, {}, [className, cls[theme]])}>
        <p className={cls.title}>{title}</p>
        <p className={cls.text}>{text}</p>
    </div>
));