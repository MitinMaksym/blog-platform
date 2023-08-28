import { FC, FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack';

import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
   className?: string;
   loading: boolean;
   value:string;
   onChange: (text: string) => void
   onSubmit: (text: string) => void
}

export const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
    const { t } = useTranslation();
    const {
        value, 
        className,
        loading,
        onChange, 
        onSubmit 
    } = props;


    const handleCommentTextChange = useCallback((text: string) => {
        onChange(text);
    }, [onChange]);

    const handleFormSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(value);
        handleCommentTextChange('');
    },[handleCommentTextChange, onSubmit, value]);

    const submitBtnDisabled = !value || loading;

    return (
        <form 
            className={classNames(cls.addCommentForm, {}, [className])} 
            onSubmit={handleFormSubmit}>
            <HStack gap='8' justify='between'>
                <Input 
                    id='addCommentInput' 
                    value={value} 
                    className={cls.input} 
                    placeholder={t('enter-comment-placeholder')}
                    onChange={handleCommentTextChange}
        
                />
                <Button
                    disabled={submitBtnDisabled}>
                    {t('send')}
                </Button>
            </HStack>
        </form>
    );
});