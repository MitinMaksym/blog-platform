import { BugButton } from 'app/providers/ErrorBoundary';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

const MainPage = () => {
    const { t } = useTranslation(['main']);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalToggle = () => setModalOpen(prev => !prev);

    const handleModalClose = useCallback(() => setModalOpen(false), []);
    
    return <>
        <h1>{t('page-title')} <BugButton/>
        </h1>
        <Button onClick={handleModalToggle}>{t('toggle-modal', {ns: 'translation'})}</Button>
        <Modal open={modalOpen} onClose={handleModalClose}>
            {t('page-title')}
        </Modal></>;
};

export default memo(MainPage);
