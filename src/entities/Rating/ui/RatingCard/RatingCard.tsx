import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StarRating } from '@/shared/ui/StarRating';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { AutoHeightTextarea } from '@/shared/ui/AutoHeightTextarea';
import { BtnVariant, Button } from '@/shared/ui/Button';

interface RatingCardProps {
    rating?: number;
    title?: string;
    className?: string;
    loading?: boolean;
    onSubmit: (rating: number, feedback?: string) => void;
}

export const RatingCard: FC<RatingCardProps> = memo((props) => {
    const { t } = useTranslation();
    const { rating = 0, title, className, loading = false, onSubmit } = props;
    const [currentRate, setCurrentRate] = useState<number>(rating);
    const [feedback, setFeedback] = useState('');
    const [modalVidible, setModalVisible] = useState(false);

    const handleFeedbackChange = (value: string) => {
        setFeedback(value);
    };

    const closeReviewModal = () => setModalVisible(false);

    const handleRatingChange = useCallback((value: number) => {
        setCurrentRate(value);
        setModalVisible(true);
    }, []);

    const handleSubmit = () => {
        onSubmit(currentRate, feedback);
        closeReviewModal();
    };

    useEffect(() => {
        setCurrentRate(rating);
    }, [rating]);

    const modalContent = (
        <VStack gap='8' align='stretch'>
            {title && <Text title={title} />}
            <VStack gap='16' align='stretch'>
                <AutoHeightTextarea data-testid='RatingCard.Input' value={feedback} onChange={handleFeedbackChange} />
                <HStack gap='8' justify='end'>
                    <Button data-testid='RatingCard.Send' onClick={handleSubmit}>
                        {t('send')}
                    </Button>
                    <Button data-testid='RatingCard.Close' variant={BtnVariant.OUTLINE_ERROR} onClick={handleSubmit}>
                        {t('cancel')}
                    </Button>
                </HStack>
            </VStack>
        </VStack>
    );

    return (
        <>
            <Card className={className} data-testid='RatingCard'>
                <VStack>
                    {title && <Text title={title} />}
                    <StarRating rating={currentRate} disabled={loading} onSelect={handleRatingChange} />
                </VStack>
            </Card>
            <Modal open={modalVidible} onClose={closeReviewModal}>
                {modalContent}
            </Modal>
        </>
    );
});
