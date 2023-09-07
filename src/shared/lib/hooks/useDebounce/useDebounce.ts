import { useRef, useCallback } from 'react';

export function useDebounce(cb:(...arg: any[]) => void, delay: number){

    const timerRef = useRef<NodeJS.Timeout>();


    return useCallback((...args: any[]) => {
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
    
        timerRef.current = setTimeout(() => {
            cb(...args);
        }, delay);
        

    },[delay, cb]);
}
/**
 * 
 * 
 */
