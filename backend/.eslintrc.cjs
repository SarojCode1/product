module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:import/typescript',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.eslint.json'
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/prefer-for-of': 'warn',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unified-signatures': 'warn',
        'comma-dangle': 'warn',
        'constructor-super': 'error',
        eqeqeq: ['warn', 'always'],
        'import/no-deprecated': 'warn',
        'import/no-extraneous-dependencies': 'error',
        'import/no-unassigned-import': 'warn',
        'no-cond-assign': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        'no-invalid-this': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-redeclare': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all'
            }
        ],
        'no-throw-literal': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-var': 'warn',
        'no-void': 'error',
        'prefer-const': 'warn',
        'no-console': 'off'
    },
    settings: {
        jsdoc: {
            tagNamePreference: {
                returns: 'return'
            }
        }
    },
    overrides: [
        {
            files: ['*.json', '*.json5'], // Specify the extension or pattern you want to parse as JSON.
            parser: 'jsonc-eslint-parser' // Set this parser.
        }
    ]
};