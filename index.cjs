module.exports = {
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@stylistic/disable-legacy',
    'plugin:@stylistic/recommended-extends',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
      typescript: {},
    },
  },
  rules: {
    // Force curly braces for control flow, including if blocks with a single statement
    'curly': ['error', 'all'],

    // Other import rules
    'import/no-mutable-exports': 'error',

    // Enforce import order
    'import/order': ['error', {
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        orderImportKind: 'asc',
      },
    }],

    // No console statements unless debugging
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // No async function without await
    'require-await': 'error',

    // Consistent type exports
    '@typescript-eslint/consistent-type-exports': ['error'],

    // Consistent type imports
    '@typescript-eslint/consistent-type-imports': ['error'],

    // No side effects in type imports
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // Allow use of 'any' type
    '@typescript-eslint/no-explicit-any': 'off',

    // Unused variables rule
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'all',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
    }],
  },
  reportUnusedDisableDirectives: true,
}
