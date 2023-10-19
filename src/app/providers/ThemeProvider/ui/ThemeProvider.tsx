import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    defaultTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
    const { theme: themeFromSettings = Theme.LIGHT } = useJsonSettings();
    const [theme, setTheme] = useState<Theme>(themeFromSettings || defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    useEffect(() => {
        const classes = document.body.className
            .split(' ')
            .filter((cls) => !(Object.values(Theme) as Array<string>).includes(cls));

        document.body.className = [...classes, theme].join(' ');
    }, [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
