import { FC, HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
   children: ReactNode
   className?: string;
}

export const Card: FC<CardProps> = (props) => {
    const { className, ...otherProps } = props;

    return (
        <div className={classNames(cls.card, {}, [className])} {...otherProps}>
            {props.children}
        </div>
    );
};