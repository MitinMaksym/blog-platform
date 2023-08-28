import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import { HStack } from '@/shared/ui/Stack';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <HStack className={classNames(cls.pageLoader, {}, [className])} 
        justify='center'>
        <Loader/>
    </HStack>
);