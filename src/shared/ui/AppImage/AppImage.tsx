import { ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
    errorFallback?: ReactElement
    fallback?: ReactElement
    className?: string
}

export const AppImage = ({ className, errorFallback, fallback, src, ...props }: AppImageProps) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => setLoading(false);
        img.onerror = () => {
            setLoading(false);
            setError(true);
        };
    }, [src]);

    if (loading && fallback) return fallback;
    if (error && errorFallback) return errorFallback;
 
    return (
        <img src={src} className={className} {...props} />
    );
};