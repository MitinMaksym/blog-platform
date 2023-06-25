import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

import cls from './Page.module.scss';

interface PageProps {
   children: ReactNode
   className?: string
   onScrollEnd?: () => void
}

export const Page: FC<PageProps> = ({children, className, onScrollEnd}) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });
    return (
        <div ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef}/>
        </div>);
};