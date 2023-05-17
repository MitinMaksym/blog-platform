import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import IcondLight from 'shared/assets/icons/theme-light.svg';
import IconDark from 'shared/assets/icons/theme-dark.svg';
import { BtnVariant, Button } from 'shared/ui/Button/Button';

// import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant={BtnVariant.CLEAR}
            className={classNames("", {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <IconDark /> : <IcondLight />}
        </Button>
    );
};
