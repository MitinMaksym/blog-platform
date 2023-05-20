module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'airbnb-base',
        'prettier',
        'plugin:i18next/recommended',
        'plugin:react-hooks/recommended',
        'plugin:storybook/recommended'],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/function-component-definition': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx']
        }],
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "semi": [2, "always"],
        "max-len": [2, {
            code: 100,
            ignoreComments: true
        }],
        "class-methods-use-this": 'off',
        "react/display-name": 'off'
    },
    globals: {
        __IS_DEV__: true
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            "i18next/no-literal-string": 'off'
        }
    }]
};