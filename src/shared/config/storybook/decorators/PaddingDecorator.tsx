
import { StoryFn } from '@storybook/react';

export const PaddingDecorator = (padding: number) => (Story: StoryFn) =>
    (
        <div style={{ padding: `${padding}px` }}>
            <Story />
        </div>
    );