import { DetailedHTMLProps, FC, memo, TextareaHTMLAttributes, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import useAutosizeTextArea from '@/shared/lib/hooks/useAutosizeTextArea/useAutosizeTextArea';

import cls from './AutoHeightTextarea.module.scss';

interface AutoHeightTextareaProps
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'onChange'
  > {
  value: string
  className?: string
  onChange: (value: string) => void
}

export const AutoHeightTextarea: FC<AutoHeightTextareaProps> = memo((props) => {
    const { value, className, disabled, maxLength, onChange, ...otherProps } =
      props;
    const [_, setMounted] = useState(false);
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    useAutosizeTextArea(textAreaRef.current, value);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target?.value);
    };
  
    const handleTextAreaRef = (node: HTMLTextAreaElement) => {
        if (node !== null) {
            textAreaRef.current = node;
            setMounted(true);
        }
    };
  
    return (
        <div className={classNames(cls.autoHeightTextarea, {}, [className])}>
            <textarea
                className={classNames(cls.textArea)}
                disabled={disabled}
                ref={handleTextAreaRef}
                value={value}
                maxLength={maxLength}
                onChange={handleChange}
                {...otherProps}
            />
        </div>
    );
});