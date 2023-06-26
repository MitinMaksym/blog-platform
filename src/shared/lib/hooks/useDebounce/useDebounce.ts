import { useRef, useCallback, useEffect } from 'react';

export function useDebounce(cb:(...arg: any[]) => void, delay: number){

    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => () => {
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);

    return useCallback((...args: any[]) => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
    
        timerRef.current = setTimeout(() => {
            cb(...args);
        }, delay);
        

    },[delay, cb]);
}

