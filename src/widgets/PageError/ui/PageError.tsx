import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const {t} = useTranslation();

    const handlePageReload = () => {
        window.location.reload();
    };
    return  <div className={classNames(cls.pageError, {}, [className])}>
        <h1 className={cls.title}>{t('error-occured')}</h1> 
        <Button onClick={handlePageReload}>{t('reload-page')}</Button>
    </div>;
};