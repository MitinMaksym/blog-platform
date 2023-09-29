import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web');
type GuestureType = typeof import('@use-gesture/react');

interface AnimationContext {
    Guesture?: GuestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContext>({});

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContext>;

interface AnimationProviderProps {
    children: ReactNode;
}
const loadAsyncAnimationLibs = async () => Promise.all([import('@use-gesture/react'), import('@react-spring/web')]);

export const AnimationProvider: FC<AnimationProviderProps> = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const springRef = useRef<SpringType>();
    const guestureRef = useRef<GuestureType>();

    useEffect(() => {
        loadAsyncAnimationLibs().then(([Guesture, Spring]) => {
            springRef.current = Spring;
            guestureRef.current = Guesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(
        () => ({
            isLoaded,
            Guesture: guestureRef.current,
            Spring: springRef.current,
        }),
        [isLoaded],
    );

    return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
