import { useCallback, useState, useMemo } from 'react';

interface UseHoverBind {
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}

type UseHoverResult = [boolean, UseHoverBind]

export const useHover = (): UseHoverResult => {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setHover(true);
    },[]);
  
    const handleMouseLeave = useCallback(() => {
        setHover(false);
    },[]);

    return useMemo(() => [hover, {handleMouseEnter, handleMouseLeave}], 
        [hover, handleMouseEnter, handleMouseLeave]);
  
};
