import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page data-testid='About'>
            <h1>{t('page-title')}</h1>
        </Page>
    );
};

export default memo(AboutPage);
