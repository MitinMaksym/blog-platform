module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/recommended',
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:i18next/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended',
        'plugin:cypress/recommended',
        'prettier',
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'fsd-methodology-rules-checker',
        'unused-imports',
    ],
    rules: {
        'react/function-component-definition': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-shadow': 'off',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'class-methods-use-this': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'unused-imports/no-unused-imports': 'error',
        'cypress/unsafe-to-chain-command': 'off',
        'fsd-methodology-rules-checker/path-checker': ['error', { alias: '@' }],
        'fsd-methodology-rules-checker/public-api-imports': [
            'error',
            {
                alias: '@',
                testPatterns: ['**/StoreDecorator.tsx', '**/*.test.*', '**/*.story.*'],
            },
        ],
        'fsd-methodology-rules-checker/layers-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/testing', '**/StoreProvider', '**/*.test', '**/*.story'],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __PROJECT__: 'readonly',
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
