import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme  {
    PRIMARY = 'primary',
    ERROR = 'error'
}

type Align = 'left' | 'right' | 'center'

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: Align
}

export const Text: FC<TextProps> = memo((props) => {
    const { className, title, text, theme = TextTheme.PRIMARY, align='left' } = props;
    return <div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
        <p className={cls.title}>{title}</p>
        <p className={cls.text}>{text}</p>
    </div>;
});