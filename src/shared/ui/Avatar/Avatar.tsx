import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';

import { Skeleton } from '../Skeleton';
import AvatarIcon from '@/shared/assets/icons/avatar.svg';
import { Icon } from '../Icon';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    align?: 'left' | 'center' | 'right';
}

export const Avatar = memo(({ className, src, size, align = 'left' }: AvatarProps) => {
    const avatarStyles: CSSProperties = useMemo(() => ({ width: size || 50, height: size || 50 }), [size]);

    return (
        <div className={classNames(cls.container, {}, [cls[align], className])}>
            <div className={classNames(cls.innerWrapper, {}, [])} style={avatarStyles}>
                <AppImage
                    fallback={<Skeleton width={size} height={size} border='50%' />}
                    errorFallback={<Icon SVG={AvatarIcon} />}
                    src={src}
                />
            </div>
        </div>
    );
});
