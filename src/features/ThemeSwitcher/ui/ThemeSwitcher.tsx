import { useTheme } from 'app/providers/ThemeProvider';
import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/toggle-theme.svg';
import { BtnVariant, Button } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            variant={BtnVariant.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon className={cls.toggleIcon}/>
        </Button>
    );
});
