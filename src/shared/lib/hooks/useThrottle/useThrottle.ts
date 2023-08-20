import { useRef, useCallback } from 'react';

export function useThrottle(cb:(...arg: any[]) => void, delay: number){
    const throttleRef = useRef(false);
    const lastArgs = useRef<any>();


    return useCallback((...args: any[]) => {
        if(throttleRef.current) {
            lastArgs.current = args;
            return;
        }
        cb(...args);
        throttleRef.current = true;

        setTimeout(() => {
            throttleRef.current = false;
            
            if(lastArgs.current){
                cb(...lastArgs.current);
            }

        }, delay);

    }, [cb, delay]);
}