import eslint from '@eslint/js';

export default [
    eslint.configs.recommended,
    {
        ignores: ['dist/*', 'docs/*', 'generated-client/*', 'lib/*']
    }
];