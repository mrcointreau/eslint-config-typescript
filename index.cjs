module.exports = {
  extends: [
    'standard',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
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
      groups: [['builtin', 'external', 'internal']],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        orderImportKind: 'asc',
        caseInsensitive: true
      },
    }],

    // No console statements unless debugging
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Allows using the void operator when needed
    'no-void': 'off',

    // No async function without await
    'require-await': 'error',

    // Enforce sorting of import members
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],

    // Consistent type exports
    '@typescript-eslint/consistent-type-exports': ['error'],

    // Consistent type imports
    '@typescript-eslint/consistent-type-imports': ['error'],

    // No side effects in type imports
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // Unused variables rule
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'all',
      argsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
    }],
  },
  reportUnusedDisableDirectives: true,
}
