import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import  './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = memo(({ className }) => (
    <div className={classNames('ldsEllipsis', {}, [className])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

));