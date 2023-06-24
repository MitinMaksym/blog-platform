import { MutableRefObject, useEffect } from 'react';

interface InfiniteSrollProps {
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
  callback?: () => void,
}
export function useInfiniteScroll(props:InfiniteSrollProps){
    const {callback, triggerRef, wrapperRef} = props;

    useEffect(() => {
        let observer:IntersectionObserver | undefined;
        
        if(callback){
            const options = {
                root: wrapperRef.current,
                rootMargin: '1px',
                threshold: 1.0
            };
            observer = new IntersectionObserver(([entry]) => {


                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
  

            observer.observe(triggerRef.current);
        }
        // eslint-disable-next-line
      return () => observer?.unobserve(triggerRef.current);
        
        
        
    }, [wrapperRef, triggerRef, callback]);
    
}
