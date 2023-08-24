import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme  {
    PRIMARY = 'primary',
    ERROR = 'error'
}

type Align = 'left' | 'right' | 'center'

type Size = 'sizeS' | 'sizeM' | 'sizeL'


interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: Align
    size?: Size
    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<Size,  HeaderTagType> = {
    'sizeS':'h3',
    'sizeM':'h2',
    'sizeL':'h1',
};


export const Text: FC<TextProps> = memo((props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = 'left',
        size = 'sizeM',
        'data-testid': dataTestId,
    } = props;
    const HeaderTag = mapSizeToHeaderTag[size];

    return <div className={classNames(cls.text, {}, [className, cls[theme], cls[align], cls[size]])}>
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>{title}</HeaderTag>
        <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>{text}</p>
        <h1></h1>
    </div>;
});