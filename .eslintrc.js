module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'unused-imports/no-unused-vars-ts': 'warn',
    'unused-imports/no-unused-imports-ts': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  plugins: ['unused-imports', 'simple-import-sort'],
}
