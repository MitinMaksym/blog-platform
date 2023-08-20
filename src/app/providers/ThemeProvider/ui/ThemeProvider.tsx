import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps  {
    defaultTheme?: Theme
    children: ReactNode
}

const ThemeProvider= ({ children, defaultTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(
        defaultTheme || (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT);
   
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    useEffect(() => {
        const classes = document.body.className.split(' ')
            .filter(cls => !(Object.values(Theme) as Array<string>).includes(cls)) ;
        
        document.body.className = [...classes, theme].join(' ');

    }, [theme]);
    
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
