import { useRef, useCallback, useEffect } from 'react';

export function useThrottle(cb:(...arg: any[]) => void, delay: number){
    const throttleRef = useRef(false);
    const lastArgs = useRef<any>();
    const timerRef = useRef<NodeJS.Timeout>();

    useEffect(() => () => {
        if(timerRef.current) {
            clearTimeout(timerRef.current);}
    }, []);

    return useCallback((...args: any[]) => {
        if(throttleRef.current) {
            lastArgs.current = args;
            return;
        }

        cb(...args);
        throttleRef.current = true;

        timerRef.current = setTimeout(() => {
            throttleRef.current = false;
            
            if(lastArgs.current){
                cb(...lastArgs.current);
            }

        }, delay);

    }, [cb, delay]);
}