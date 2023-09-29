import { FC, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon: FC<IconProps> = (props) => {
    const { className, SVG, inverted = false, ...otherProps } = props;

    return <SVG className={classNames(cls.icon, { [cls.inverted]: inverted }, [className])} {...otherProps} />;
};
