import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    importPlugin.flatConfigs.errors,
    importPlugin.flatConfigs.warnings,
    importPlugin.flatConfigs.typescript,
    {
        ignores: ['dist/*', 'docs/*', 'generated-client/*', 'lib/*']
    },
    {
        files: ['**/*.ts'],
        ...importPlugin.flatConfigs.typescript,
        languageOptions: {
            parser: tseslint.parser
        }
    },
    {
        files: ['**/*.ts', '**/*.js'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            'import/order': ['error', {
                'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
                'newlines-between': 'always-and-inside-groups'
            }],
    
            '@typescript-eslint/consistent-type-imports': ['error'],
    
            'array-callback-return': ['error'],
            'arrow-spacing': ['error'],
            'block-spacing': ['error'],
            'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
            'comma-dangle': ['error', 'never'],
            'comma-spacing': ['error'],
            'curly': ['error', 'multi-line'],
            'eol-last': ['error'],
            'indent': ['error', 'tab', { 'SwitchCase': 1 }],
            'jsx-quotes': ['error', 'prefer-single'],
            'key-spacing': ['error'],
            'keyword-spacing': ['error'],
            'max-statements-per-line': ['error'],
            'no-floating-decimal': ['error'],
            'no-multi-spaces': ['error'],
            'no-multiple-empty-lines': ['error', { 'max': 1 }],
            'no-restricted-globals': ['error'],
            'no-trailing-spaces': ['error'],
            'no-unreachable': ['error'],
            'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true, 'allowTaggedTemplates': true }],
            'object-curly-spacing': ['error', 'always'],
            'one-var': ['error', 'never'],
            'padded-blocks': ['error', 'never'],
            'prefer-const': ['error', { 'destructuring': 'all' }],
            'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': false }],
            'semi': ['error'],
            'no-var': ['error'],
            'space-before-blocks': ['error'],
            'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always' }],
            'space-infix-ops': 'error',
            'yoda': 'error'
        },
    },
];
