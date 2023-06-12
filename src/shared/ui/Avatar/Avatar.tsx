import { CSSProperties, FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    align?: 'left' | 'center' | 'right'
}

export const Avatar: FC<AvatarProps> = memo(({ className, src, size, align='left' }) => {

    const avatarStyles:CSSProperties = useMemo(() => ({width: size || 50, height: size || 50}),[size]);

    return  <div className={classNames(cls.container, {}, [cls[align], className])}>
        <div className={classNames(cls.innerWrapper, {}, [])} style={avatarStyles}>
            <img src={src}/>
        </div>
    </div>;
            
});