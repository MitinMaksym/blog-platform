import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
   className?: string;
   SVG: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon: FC<IconProps> = (props) => {
    const { className, SVG } = props;

    return <SVG className={classNames(cls.icon, {}, [className])}/>;

};