module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        '@stylistic/js'
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@stylistic/js/indent': ['error', 4],
        '@stylistic/js/comma-dangle': ["error", "never"],
        '@stylistic/js/quotes': ["error", "single"],
        '@stylistic/js/semi': ["error", "always"]
    }
}
