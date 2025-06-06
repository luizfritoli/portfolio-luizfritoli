import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks', // Adiciona regras para React Hooks
        'plugin:testing-library/react',
        'plugin:prettier/recommended', // Substitui "prettier" para melhor integração
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: [
        'react',
        'testing-library',
        // Removido "prettier" (já incluso no plugin:prettier/recommended)
    ],
    rules: {
        // React
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/react-in-jsx-scope': 'off', // Não necessário a partir do React 17+
        'react/prop-types': 'off', // Opcional (desative se usar TypeScript)
        'react/jsx-no-constructed-context-values': 'off',

        // Imports
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.{js,jsx}',
                    '**/*.spec.{js,jsx}',
                    '**/setupTests.js',
                ],
            },
        ],

        // JSX/Outros
        'jsx-a11y/label-has-associated-control': [
            'error',
            { assert: 'either' },
        ],
    },
    overrides: [
        {
            files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}'],
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
