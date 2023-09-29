import { FC, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyBtn from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { BtnVariant, Button } from '../Button/Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = memo((props) => {
    const { className, text } = props;

    const handleCopyBtnClick = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <code>
                <Button className={cls.copyBtn} variant={BtnVariant.CLEAR} onClick={handleCopyBtnClick}>
                    <CopyBtn className={cls.copyIcon} />
                </Button>
                {text}
            </code>
        </pre>
    );
});
