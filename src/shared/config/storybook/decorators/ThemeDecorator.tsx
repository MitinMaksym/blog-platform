import { StoryFn } from '@storybook/react';
// eslint-disable-next-line fsd-methodology-rules-checker/layers-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator =
    (thm: Theme = Theme.LIGHT) =>
    (Story: StoryFn) => (
        <ThemeProvider defaultTheme={thm}>
            <div className='app'>
                <Story />
            </div>
        </ThemeProvider>
    );
