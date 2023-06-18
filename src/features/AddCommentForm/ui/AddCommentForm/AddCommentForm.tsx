import { FC, FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { selectCommentFormText } from '../../model/selectors/selectCommentFormText/selectCommentFormText';

import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
   className?: string;
   loading: boolean;
   onSubmit: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { className, loading, onSubmit } = props;
    const text = useSelector(selectCommentFormText);

    const handleCommentTextChange = useCallback((text: string) => {
        dispatch(addCommentFormActions.setText(text));
    }, [dispatch]);

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(text || '');
        dispatch(addCommentFormActions.setText(''));
    };

    const submitBtnDisabled = !text || loading;

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <form 
                className={classNames(cls.addCommentForm, {}, [className])} 
                onSubmit={handleFormSubmit}>
                <Input 
                    id='addCommentInput' 
                    value={text} 
                    className={cls.input} 
                    placeholder={t('enter-comment-placeholder')}
                    onChange={handleCommentTextChange}
        
                />
                <Button
                    disabled={submitBtnDisabled}>
                    {t('send')}
                </Button>
            </form>
        </DynamicReducerLoader>
    );
});

export default AddCommentForm;