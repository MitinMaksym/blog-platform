import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIcon from '@/shared/assets/icons/toggle-theme.svg';
import { BtnVariant, Button } from '@/shared/ui/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './ThemeSwitcher.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const handleThemeToggle = () => {
        toggleTheme((newTheme) => dispatch(saveJsonSettings({ theme: newTheme })));
    };

    return (
        <Button variant={BtnVariant.CLEAR} className={classNames('', {}, [className])} onClick={handleThemeToggle}>
            <ThemeIcon className={cls.toggleIcon} />
        </Button>
    );
});
