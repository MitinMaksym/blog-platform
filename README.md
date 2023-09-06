## Run project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - run project in dev mode
```

----

## Scripts

- `npm run start` - Run frontend project with webpack dev server
- `npm run start:vite` - Run frontend project with vite
- `npm run start:dev` - Run frontend project with webpack dev server + backend
- `npm run start:dev:vite` - Run frontend project with vite + backend
- `npm run start:dev:server` - Run backend server
- `npm run build:prod` - Prod build
- `npm run build:dev` - Dev build (not minimized)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with style linter
- `npm run lint:scss:fix` - Fix scss files with style linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Approve new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Report generation for screenshot tests
- `npm run test:ui:json` - JSON report generation for screenshot tests
- `npm run test:ui:html` - HTML report generation for screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - Script for generations FSD slices

----

## Project architecture

The project is designed according to the FSD methodology

Link to the docs - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Internationalization

i18next library is used to handle translations in the project.
Files with translations are stored in public/locales.

For comfortable work we recommend to install i18n Ally plugin (vscode)

i18next docs - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

There 4 types of tests in the project:
1) Unit tests (Jest) - `npm run test:unit`
2) Components tests (React testing library) - `npm run test:unit`
3) Screenshot tests with loki `npm run test:ui`
4) e2e tests with Cypress `npm run test:e2e`

More details about tests - [Tests docs](/docs/tests.md)

----

## Linting

Eslint and stylelint are used for checking typescript and scss files.

In addition, own eslint-plugin-fsd-methodology-rules-checker is used for strict control of the main architecture principles own eslint
are used and contains 3 rules:
1) path-checker - prohibits the use of absolute imports within the same module
2) layer-imports - checks the correctness of using layers from the point of view of FSD
   (f.e widgets can't be used in features or entitites)
3) public-api-imports - Allows import from other modules only from public api. It has autofix.

##### Run linters
- `npm run lint:ts` - Check ts files
- `npm run lint:ts:fix` - Fix ts files
- `npm run lint:scss` - Check scss files with style lint
- `npm run lint:scss:fix` - Fix scss files

----
## Storybook

There are story cases for each components in the project.
Server requests are mocked with the help of storybook-addon-mock.

Files with the story cases are created next to the components with the extention .stories.tsx

To run storybook:
- `npm run storybook`

More details about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator';
import { BtnSize, BtnVariant, Button } from './Button';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: BtnVariant,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        variant: BtnVariant.CLEAR,
        children: 'Text'
    },
    decorators:[ThemeDecorator()]  
};

export const Outlined: Story = {
    args: {
        variant: BtnVariant.OUTLINE,
        children: 'Text'
    },
    decorators:[ThemeDecorator()]
};s
```


----

## Project config

The project has 2 configs for development:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both bundlers are adapted to the main features of the application.

All the config is stored in /config
- /config/babel - babel
- /config/build - webpack config
- /config/jest - test environment config
- /config/storybook - storybook config

`scripts` forlder contains different scripts for refactoring\simplification of writing code\report generation, etc.

----

## CI pipeline and pre-commit hooks

Github actions config is in /.github/workflows.
CI runs all the types of tests, project and storybook builds, linting.

Pre-commit hooks check the project with linters, config is in /.husky

----

### Working with data

Managing data is carried out using the redux toolkit.
Whenever possible, reusable entities should be normalized using the EntityAdapter
Server requests are sent with [RTK query](/src/shared/api/rtkApi.ts)

For async reducers injection (to trim down the initial bundle size)
[DynamicModuleLoader](/src/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader.tsx) is used

----


## Enitities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [ArticleDetailsComments](/src/features/ArticleDetailsComments)
- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendations](/src/features/ArticleRecommendations)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfile](/src/features/EditableProfile)
- [EditableProfile](/src/features/EditableProfile)
- [ShowNotificationsButton](/src/features/ShowNotificationsButton)
- [ProfileRating](/src/features/ProfileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [ArticlesFilters](/src/features/ArticlesFilters)
- [ArticleViewSwitcher](/src/features/ArticleViewSwitcher)
