import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { HStack } from '@/shared/ui/Stack';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(({ className }) => {
    const {t} = useTranslation();
    return (  
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            <HStack justify='center'>
                {t('not-found-page')}
            </HStack>
        </Page>);
});