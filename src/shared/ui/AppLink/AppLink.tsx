import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINED = 'outlined',
  INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  disabled?: boolean
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        disabled = false,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {[cls.disabled]: disabled}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
