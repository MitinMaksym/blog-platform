import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (thm: Theme = Theme.LIGHT) => (Story: StoryFn) => (
    <ThemeProvider defaultTheme={thm}>
        <div className="app"><Story /></div>
    </ThemeProvider>
);

