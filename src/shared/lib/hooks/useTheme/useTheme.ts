import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}
export const useTheme = (): UseThemeResult => {
    const { theme = Theme.DARK, setTheme } = useContext(ThemeContext);
    
    const toggleTheme = () => {
        let newTheme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
};
