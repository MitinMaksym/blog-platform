import { useContext } from 'react';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: (saveCallback: (theme: Theme) => void) => void;
}
export const useTheme = (): UseThemeResult => {
    const { theme = Theme.DARK, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveCallback: (theme: Theme) => void) => {
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
        saveCallback(newTheme);
    };
    return { theme, toggleTheme };
};
