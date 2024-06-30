module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
  'airbnb',
  'airbnb-typescript',
  'airbnb/hooks',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {'no-console': 'off',}
  };