import { ReactNode, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
    const { theme: themeFromSettings } = useJsonSettings();
    const [theme, setTheme] = useState<Theme>(themeFromSettings || initialTheme || Theme.LIGHT);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    useLayoutEffect(() => {
        if (themeFromSettings) {
            setTheme(themeFromSettings);
        }
    }, [themeFromSettings]);

    useEffect(() => {
        const classes = document.body.className
            .split(' ')
            .filter((cls) => !(Object.values(Theme) as Array<string>).includes(cls));

        document.body.className = [...classes, theme].join(' ');
    }, [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
