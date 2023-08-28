import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between'
type FlexAlign = 'start' | 'center' | 'end' | 'stretch'
type FlexDirection = 'row' | 'column'
type FlexGap = '4' | '8' | '16' | '24' | '32'

const justifyClasses: Record<FlexJustify, string> = {
    'start': cls.justifyStart,
    'center': cls.justifyCenter,
    'end': cls.justifyEnd,
    'between': cls.justifyBetween
};

const alignClasses: Record<FlexAlign, string> = {
    'start': cls.alignStart,
    'center': cls.alignCenter,
    'end': cls.alignEnd,
    'stretch': cls.stretch
};



const directionClasses: Record<FlexDirection, string> = {
    'row': cls.directionRow,
    'column': cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    '4': cls.gap4,
    '8': cls.gap8,
    '16': cls.gap16,
    '24': cls.gap24,
    '32': cls.gap32,
};

export interface FlexProps {
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    className?: string
}

export const Flex = (props: FlexProps) => {
    const { 
        justify = 'start', 
        align = 'center', 
        direction = 'row',
        gap,
        children,
        className 
    } = props;

    const classes = [
        justifyClasses[justify], 
        alignClasses[align], 
        directionClasses[direction],
        gap && gapClasses[gap]
    ];

    return (
        <div className={classNames(cls.flex, {}, [...classes, className])}>
            {children}
        </div>
    );
};