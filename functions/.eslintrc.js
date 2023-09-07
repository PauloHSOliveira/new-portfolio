module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['**/tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
    '.eslintrc.js',
  ],
  plugins: ['prettier', '@typescript-eslint', 'import'],
  rules: {
    quotes: ['error', 'single'],
    'import/no-unresolved': 0,
    'require-jsdoc': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'max-len': 'off',
  },
}
