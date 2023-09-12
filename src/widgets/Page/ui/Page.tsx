import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { selectPageScrollByPath } from '../model/selectors/selectPageScrollByPath/selectPageScrollByPath';
import { pageActions } from '../model/slice/pageSlice';
import { TestProps } from '@/shared/types/test';

import cls from './Page.module.scss';

interface PageProps extends TestProps {
   children: ReactNode
   className?: string
   onScrollEnd?: () => void
}

export const Page: FC<PageProps> = ({children, className, onScrollEnd, ...props}) => {
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const scrollPosition = useSelector(selectPageScrollByPath(pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    });

    const setScrollPosition = useDebounce((position) => {
        dispatch(pageActions.setScrollPosition(
            {
                path: pathname, 
                position
            })
        );
    }, 500);

    const handleScroll = (e:UIEvent<HTMLDivElement>) => {
        setScrollPosition(e.currentTarget.scrollTop);
    };

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={handleScroll}
            {...props}
        >
            {children}
            <div ref={triggerRef} />
        </main>
    );
};