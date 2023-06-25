import { MutableRefObject, useEffect } from 'react';

interface InfiniteSrollProps {
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
  callback?: () => void,
}
export function useInfiniteScroll(props:InfiniteSrollProps){
    const {callback, triggerRef, wrapperRef} = props;

    useEffect(() => {
        const triggetEl = triggerRef.current;
        const wrapperEl = wrapperRef.current;

        let observer:IntersectionObserver | undefined;
        
        if(callback){
            const options = {
                root: wrapperEl,
                rootMargin: '1px',
                threshold: 1.0
            };
            observer = new IntersectionObserver(([entry]) => {


                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
  

            observer.observe(triggetEl);
        }
        // eslint-disable-next-line
      return () => observer?.unobserve(triggetEl);
        
        
        
    }, [wrapperRef, triggerRef, callback]);
    
}
