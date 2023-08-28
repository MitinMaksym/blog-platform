import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/ErrorBoundary';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <Page>
            <h1>{t('page-title')}
            </h1>
            <BugButton/>
        </Page>
    );
};

export default memo(MainPage);
