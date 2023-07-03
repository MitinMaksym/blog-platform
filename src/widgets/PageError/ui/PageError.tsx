import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { VStack } from 'shared/ui/Stack';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const {t} = useTranslation();

    const handlePageReload = () => {
        window.location.reload();
    };
    return  <VStack 
        className={classNames(cls.pageError, {}, [className])} 
        justify='center' 
        gap='16'>
        <h1 className={cls.title}>{t('error-occured')}</h1> 
        <Button onClick={handlePageReload}>{t('reload-page')}</Button>
    </VStack>;
};