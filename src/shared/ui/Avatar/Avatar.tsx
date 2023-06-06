import { CSSProperties, FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
}

export const Avatar: FC<AvatarProps> = memo(({ className, src, size }) => {

    const avatarStyles:CSSProperties = useMemo(() => ({width: size || 50, height: size || 50}),[size]);

    return  <div className={classNames(cls.wrapper, {}, [className])} style={avatarStyles}>
        <img src={src}/>
    </div>;
            
});