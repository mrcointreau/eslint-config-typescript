module.exports = {
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'unicorn',
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
      typescript: {}
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
  },
  rules: {
    // Allow paren-less arrow functions only when there's no braces
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

    // Force curly braces for control flow, including if blocks with a single statement
    'curly': ['error', 'all'],

    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // No console statements unless debugging
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Force dot notation when possible
    'dot-notation': 'error',

    // Imports should come first
    'import/first': 'error',

    // Allow unresolved imports
    'import/no-unresolved': 'off',

    // Other import rules
    'import/no-mutable-exports': 'error',

    // Enforce import order
    'import/order': ['error', { 'newlines-between': 'always', alphabetize: { order: 'asc', orderImportKind: 'asc' } }],

    // No single if in an 'else' block
    'no-lonely-if': 'error',

    // Allow async-await
    'generator-star-spacing': 'off',

    // No variables declared with var
    'no-var': 'error',

    // No useless destructuring/importing/exporting renames
    'no-useless-rename': 'error',

    // Prefer const over let
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],

    // No async function without await
    'require-await': 'error',

    /**********************/
    /*   Unicorn Rules    */
    /**********************/
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',

    // Pass error message when throwing errors
    'unicorn/error-message': 'error',

    // Array.isArray instead of instanceof
    'unicorn/no-instanceof-array': 'error',

    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',

    // Lowercase number formatting for octal, hex, binary (0x12 instead of 0X12)
    'unicorn/number-literal-case': 'error',

    // textContent instead of innerText
    'unicorn/prefer-dom-node-text-content': 'error',

    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',

    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-string-starts-ends-with': 'error',

    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',

    // Use new when throwing error
    'unicorn/throw-new-error': 'error',

    /**********************/
    /*  TypeScript Rules  */
    /**********************/
    // Consistent type exports
    '@typescript-eslint/consistent-type-exports': 'error',

    // Consistent type imports
    '@typescript-eslint/consistent-type-imports': 'error',

    // Indentation rule
    '@typescript-eslint/indent': ['error', 2],

    // Allow use of 'any' type
    '@typescript-eslint/no-explicit-any': 'off',

    // No side effects in type imports
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // Unused variables rule
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],

    // Object curly spacing rule
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // Type annotation spacing rule
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true
        },
        generic: {
          before: true,
          after: true
        }
      }
    }],

    // Disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',

    // Disable no-undef for TypeScript files as it can interfere with TypeScript's own handling of definitions
    'no-undef': 'off',

    // Disable the base rule as it can report incorrect errors
    'indent': 'off'
  },
  reportUnusedDisableDirectives: true
}
