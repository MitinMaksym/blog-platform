import { useEffect } from 'react';

const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string): void => {
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = '0px';
            const { scrollHeight } = textAreaRef;
            textAreaRef.style.height = `${scrollHeight + 4}px`;
        }
    }, [textAreaRef, value]);
};

export default useAutosizeTextArea;
