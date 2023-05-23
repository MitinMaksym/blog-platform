import { FC, useEffect, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps  {
    defaultTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, defaultTheme }) => {
    const [theme, setTheme] = useState<Theme>(
        defaultTheme || (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT);
   
    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    useEffect(() => {
        const classes = document.body.className.split(' ')
            .filter(cls => cls !== Theme.LIGHT && cls !== Theme.DARK);
        
        document.body.className = [...classes, theme].join(' ');

    }, [theme]);
    
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
