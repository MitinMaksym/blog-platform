import { memo } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line fsd-methodology-rules-checker/layers-imports
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page data-testid='MainPage'>
            <h1>{t('page-title')}</h1>
            <BugButton />
            <Counter />
        </Page>
    );
};

export default memo(MainPage);
