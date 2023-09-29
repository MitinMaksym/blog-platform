import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BtnVariant, Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

interface EditableProfileCardButtonsProps {
    visible: boolean;
    editMode: boolean;
    className?: string;
    onSave: () => void;
    onCancel: () => void;
    onSetEditMode: () => void;
}

export const EditableProfileCardButtons: FC<EditableProfileCardButtonsProps> = ({
    className,
    visible,
    editMode,
    onSave,
    onCancel,
    onSetEditMode,
}) => {
    const { t } = useTranslation();
    if (!visible) return null;

    return (
        <HStack gap='8' className={className}>
            {editMode ? (
                <>
                    <Button data-testid='EditableProfileCardButtons.SaveButton' onClick={onSave}>
                        {t('save')}
                    </Button>
                    <Button
                        data-testid='EditableProfileCardButtons.CancelButton'
                        variant={BtnVariant.OUTLINE_ERROR}
                        onClick={onCancel}>
                        {t('cancel')}
                    </Button>
                </>
            ) : (
                <Button data-testid='EditableProfileCardButtons.EditButton' onClick={onSetEditMode}>
                    {t('edit')}
                </Button>
            )}
        </HStack>
    );
};
